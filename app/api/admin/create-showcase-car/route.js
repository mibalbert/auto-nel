/**
 * createJob / route.js
 */


import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request) {
  try {


    // const data = await request.json()

    // console.log(data)

    // const car = await prisma.car.create({
    //   data: { ...data, year: +data.year },
    // });

    // Example 1
    const car = await prisma.showcaseCar.create({
      data: {
        make: 'Mercedes-Benz',
        model: 'S-Class',
        generation: 'Seventh Generation (W223)',
        modification: 'S 500 4MATIC',
        productionYears: '2020-Present',
        powertrainArchitecture: 'Petrol Hybrid',
        bodyType: 'Sedan',
        seats: 5,
        doors: 4,
        combinedFuelConsumption: 34.9, // MPG (Miles per gallon)
        co2EmissionsWLTP: 196.8, // g/km
        fuelConsumptionUrban: 28.5, // MPG
        fuelConsumptionExtraUrban: 40.6, // MPG
        fuelConsumptionCombined: 34.9, // MPG
        fuelType: 'Petrol',
        acceleration0to100: 4.9, // seconds
        maximumSpeed: '155 mph',
        emissionStandard: 'Euro 6d',
        weightToPowerRatio: 9.5, // kg/kW
        weightToTorqueRatio: 9.8, // kg/Nm
        enginePower: 429, // kW
        powerPerLitre: 85.8, // kW/L
        torque: 520, // Nm
        engineLayout: 'Front-engine, all-wheel-drive',
        engineModelCode: 'M256',
        engineDisplacement: 2999, // cc (cubic centimeters)
        numberOfCylinders: 6,
        engineConfiguration: 'Inline-six',
        cylinderBore: 88.0, // mm
        pistonStroke: 82.1, // mm
        compressionRatio: 10.5,
        fuelInjectionSystem: 'Direct injection',
        engineAspiration: 'Turbocharged',
        valvetrain: 'DOHC, 24-valve',
        engineOilCapacity: 9.0, // liters
        engineOilSpecification: '5W-30',
        engineSystems: 'Hybrid, Turbocharged, Start/Stop system',
        kerbWeight: 2095, // kg
        maxWeight: 2810, // kg
        maxLoad: 715, // kg
        trunkSpaceMin: 15.7, // cubic feet
        trunkSpaceMax: 15.7, // cubic feet
        fuelTankCapacity: 23.8, // gallons
        maxRoofLoad: 100, // kg
        permittedTrailerLoadWithBrakes: 2200, // kg
        permittedTrailerLoadWithoutBrakes: 750, // kg
        permittedTowbarDownload: 75, // kg
        length: 208.2, // inches
        width: 75.2, // inches
        widthIncludingMirrors: 83.5, // inches
        height: 59.3, // inches
        wheelbase: 126.6, // inches
        frontTrack: 64.8, // inches
        rearTrack: 65.2, // inches
        frontOverhang: 35.6, // inches
        rearOverhang: 45.6, // inches
        rideHeight: 4.9, // inches
        dragCoefficient: 0.28,
        minimumTurningCircle: 41.7, // feet
        approachAngle: 16.9, // degrees
        departureAngle: 17.2, // degrees
        rampOverAngle: 14.8, // degrees
        climbAngle: 27.1, // degrees
        wadingDepth: 23.6, // inches
        drivetrainArchitecture: 'Front-engine, all-wheel-drive',
        driveWheel: 'All-wheel drive',
        numberOfGears: 9,
        gearboxType: 'Automatic',
        frontSuspension: 'Independent multi-link',
        rearSuspension: 'Independent multi-link',
        frontBrakes: 'Ventilated discs',
        rearBrakes: 'Solid discs',
        assistingSystems: 'ABS, ESP, Hill-hold assist',
        steeringType: 'Electric power-assisted rack-and-pinion',
        powerSteering: 'Yes',
        tiresSize: 'P245/45R19',
        wheelRimsSize: '19 inches',
        sourceLink: 'https://example.com/mercedes-s-class',
      }
    });





    return NextResponse.json({ message: 'Car created successfully', car }, { status: 200 });
  } catch (error) {
    console.error('Error creating job:', error);
    return NextResponse.json({ message: 'Unable to create Car' }, { status: 500 });
  }
}


