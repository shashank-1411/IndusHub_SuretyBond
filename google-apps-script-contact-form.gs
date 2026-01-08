/**
 * Contact Form Handler for Indushub Surety Bond Website
 * 
 * Instructions:
 * 1. Create a new Google Sheet for contact form submissions
 * 2. In the first row, add these column headers:
 *    - Timestamp
 *    - First Name
 *    - Last Name
 *    - Company
 *    - Email
 *    - Phone
 *    - City
 *    - Message
 *    - Form Type
 * 
 * 3. Copy the Sheet ID from the URL (the long string between /d/ and /edit)
 * 4. Replace 'YOUR_SHEET_ID' below with your actual Sheet ID
 * 5. Replace 'Sheet1' with your sheet name if different
 * 6. Deploy as a Web App:
 *    - Click "Deploy" > "New deployment"
 *    - Choose type: "Web app"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone"
 *    - Click "Deploy"
 * 7. Copy the Web App URL and use it in your contact form
 */

function doPost(e) {
  try {
    // Get the active spreadsheet (replace with your Sheet ID)
    const SHEET_ID = 'YOUR_SHEET_ID'; // Replace with your Google Sheet ID
    const SHEET_NAME = 'Sheet1'; // Replace with your sheet name if different
    
    // Log incoming data for debugging
    Logger.log('Received data: ' + JSON.stringify(e));
    Logger.log('Parameters: ' + JSON.stringify(e.parameter));
    
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    
    // Get form data - handle both e.parameter and e.postData
    let data = {};
    if (e.parameter) {
      data = e.parameter;
    } else if (e.postData && e.postData.contents) {
      // Parse JSON if sent as JSON
      try {
        data = JSON.parse(e.postData.contents);
      } catch (parseError) {
        // If not JSON, parse as URL-encoded
        const params = e.postData.contents.split('&');
        params.forEach(param => {
          const [key, value] = param.split('=');
          data[decodeURIComponent(key)] = decodeURIComponent(value || '');
        });
      }
    }
    
    Logger.log('Parsed data: ' + JSON.stringify(data));
    
    // Prepare row data in the order of your sheet columns
    const rowData = [
      data.timestamp || new Date().toISOString(), // Timestamp
      data.firstName || '',                       // First Name
      data.lastName || '',                        // Last Name
      data.company || '',                         // Company
      data.email || '',                           // Email
      data.phone || '',                           // Phone
      data.city || '',                            // City
      data.message || '',                         // Message
      data.formType || 'contact'                  // Form Type
    ];
    
    Logger.log('Row data to insert: ' + JSON.stringify(rowData));
    
    // Append data to the sheet
    sheet.appendRow(rowData);
    
    Logger.log('Data successfully added to sheet');
    
    // Return success response with CORS headers
    return ContentService
      .createTextOutput(JSON.stringify({
        'status': 'success',
        'message': 'Form submitted successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log error for debugging
    Logger.log('Error: ' + error.toString());
    Logger.log('Stack: ' + error.stack);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        'status': 'error',
        'message': error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Test function - you can run this to test the script
 * Make sure to update SHEET_ID first
 */
function testDoPost() {
  const mockEvent = {
    parameter: {
      timestamp: new Date().toISOString(),
      firstName: 'John',
      lastName: 'Doe',
      company: 'Test Company',
      email: 'john.doe@example.com',
      phone: '+91 9876543210',
      city: 'Mumbai',
      message: 'This is a test message',
      formType: 'contact'
    }
  };
  
  const result = doPost(mockEvent);
  Logger.log(result.getContent());
}

