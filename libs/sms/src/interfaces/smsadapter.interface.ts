export interface SmsAdapter {
  sendSMS(phoneNumber: string, message: string): any; 
}