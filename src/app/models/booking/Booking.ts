import { PaymentDetails } from "../payment/PaymentDetails";
import { Vehicle } from "../vehicle/Vehicle";

export class Booking{
    public bookingId?:number;
    public vehicle?:Vehicle;
    public payment?:PaymentDetails;
    public bookingFlag?:boolean;
    public bookingStatus?:string;
}