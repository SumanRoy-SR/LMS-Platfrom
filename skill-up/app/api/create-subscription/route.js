import { NextRequest } from "next/server";
import Razorpay from "razorpay";

export async function POST(req,res){

    const data=await req.json();
    var instance = new Razorpay({ key_id: '', key_secret: ''})

    const result = await instance.subscriptions.create({
        plan_id: data.plan_id,
        customer_notify: 1,
        quantity: 1,
        total_count: 6,
        addons: [
        ],
        notes: {
          key1: "value3",
          key2: "value2"
        }
      })

    return NextRequest.json(result);
}