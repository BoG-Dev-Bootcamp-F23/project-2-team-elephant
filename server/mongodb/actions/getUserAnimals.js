import connectDB from "../index.js";
import Animal from "../models/Animal";

export default async function getAnimals(data) {

    try {
        await connectDB(); 
        const { owner } = data;
        const animals = await Animal.find({ owner: owner})
        return animals;
    } catch (e) {
        console.log(e);
        throw new Error("Unable to get Animals.");
    }
    
}