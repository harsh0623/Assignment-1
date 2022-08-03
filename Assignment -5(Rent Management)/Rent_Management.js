let Flats = [{
    flatNumber: 1,
    tenantName: "Ravish",
    totalRent: 20000,
    rentPaid: 18000

},
{
    flatNumber: 2,
    tenantName: "Sooraj",
    totalRent: 15000,
    rentPaid: 15000
},
{
    flatNumber: 3,
    tenantName: "Akash",
    totalRent: 25000,
    rentPaid: 25000
},
{
    flatNumber: 4,
    tenantName: "Sanjay",
    totalRent: 18000,
    rentPaid: 15000

},
{
    flatNumber: 5,
    tenantName: "Akshay",
    totalRent: 24000,
    rentPaid: 24000
}];

totalEarning = 0;
rentPending = 0;

for (let flat of Flats) {
    //calculating total earning.
    totalEarning = flat.rentPaid + totalEarning;

    //calculating rent left.
    flat.rentLeft = flat.totalRent - flat.rentPaid;

    //calculatng rent pending.
    rentPending = flat.rentLeft + rentPending;

    console.log(flat);
    //calculating rent defaulters.
    flat.rentDefaulter = flat.rentLeft > 0 ? `Flat Number:${flat.flatNumber}, Tenant Name:${flat.tenantName}, Rent Due:${flat.rentLeft}` : "";

};

console.log("1:-List of tenant's who not paid fill rent are:")
for (let flat of Flats) {
    console.log(flat.rentDefaulter);
}
console.log("2:-Total rent that he has earned from all tenant's are:Rs." + totalEarning);
console.log("3:-New entry added of rent pending(#rentLeft) on each tenant data.");
console.log("4:-Total rent pending from all tenant's are:Rs." + rentPending);
