let statusCode = 404; 

switch (statusCode) {
  case 200:
    console.log("PASS - OK");
    break;

  case 201:
    console.log("PASS - Created");
    break;

  case 301:
    console.log("WARNING - Moved ");
    break;

  case 400:
    console.log("FAIL - Bad Request");
    break;

  case 401:
    console.log("FAIL - Unauthorized:");
    break;

  case 403:
    console.log("FAIL - Forbidden");
    break;

  case 404:
    console.log("FAIL - Not Found");
    break;

  case 500:
    console.log("FAIL - Internal Server Error");
    break;

  default:
    console.log("UNKNOWN - Unhandled status code");
}
