import mongoose from "mongoose";
import connectDB from "../index";
import Animal from "../models/Animal";
import User from "../models/User";
import { BSON } from "mongodb";
import {ObjectId} from 'bson';

export default async function createAnimal(data) {
    try {
        await connectDB()
        // const animal = new Animal(data)
        // await animal.save()
        // return true;

        const { owner} = data;
    
        const existOwner = await User.findOne({_id : owner});
        if (!existOwner) {
            return null;
        }

        // data.owner = mongoObjectId;
        const animal = new Animal(data)
        await animal.save()
        return true;


        //return (!existOwner ? null : Animal.findByIdAndUpdate(animalId, { hoursTrained: hoursTrained }));
    } catch (e) {
        console.log(e)
        throw new Error("Unable to create animal. Invalid data or database issue.")
    }

}