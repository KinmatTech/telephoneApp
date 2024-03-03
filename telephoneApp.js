// Observer Settings Class
class Observer {
    update(phoneNumber) {
      // to be executed by actual observers
    }
  }
  
  // Class of Actual Observer 1
  class PrintPhoneNumberObserver extends Observer {    
    update(phoneNumber) {
      console.log(" ");
      console.log(`Phone Number: ${phoneNumber}`);
    }
  }
  
  // Class of Actual Observer 2
  class CustomMessageObserver extends Observer {
    update(phoneNumber) {
      console.log(`Now Dialing: ${phoneNumber}`);
    }
  }
  
  // Subject (Telephone) with Observer Pattern
  class Telephone {
    constructor() {
      this.phoneNumbers = [];
      this.observers = [];
    }
  
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    removeObserver(observer) {
      this.observers = this.observers.filter(obs => obs !== observer);
    }
  
    notifyObservers(phoneNumber) {
      this.observers.forEach(observer => {
        observer.update(phoneNumber);
      });
    }
  
    addPhoneNumber(phoneNumber) {
      this.phoneNumbers.push(phoneNumber);
    }
  
    removePhoneNumber(phoneNumber) {
      const index = this.phoneNumbers.indexOf(phoneNumber);
      if (index !== -1) {
        this.phoneNumbers.splice(index, 1);
      }
    }
  
    // Observer is being notified of a dialed number
    dialPhoneNumber(phoneNumber) {
      if (this.phoneNumbers.includes(phoneNumber)) {
        console.log(" ");
        console.log(`Notifying observer of a dialed number: ${phoneNumber}`);
        this.notifyObservers(phoneNumber);       
      } else {
        console.log(`Error: ${phoneNumber} not found in phone book`);
      }
    }
  }
  
  // Using the example below:
  const telephone = new Telephone();
  
  const observer1 = new PrintPhoneNumberObserver();
  const observer2 = new CustomMessageObserver();
  
  // Adding observers to the phone number
  telephone.addObserver(observer1);
  telephone.addObserver(observer2);
  
  telephone.addPhoneNumber("+2347034567890");
  telephone.dialPhoneNumber("+2347034567890");