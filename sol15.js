try {
    let potentialObject;
  
    let nonExistentProperty = potentialObject.someProperty;
  
    console.log("Property accessed successfully:", nonExistentProperty);
  } catch (error) {
  
    if (error instanceof TypeError) {
      console.error("Error: Cannot access property of undefined object.");
      console.error("Error details:", error.message);
    } else {
      throw error;
    }
  } finally {
    console.log("This code always executes, even if there's an error.");
  }