import fs from "fs";

// ---------------------------------------------
// Read source files
// ---------------------------------------------

const collectionWatches = JSON.parse(
  fs.readFileSync(
    "./frontend/src/data/watches_list.json",
    "utf-8"
  )
);

const detailedWatches = JSON.parse(
  fs.readFileSync(
    "./frontend/src/data/all_watches.json",
    "utf-8"
  )
);

// ---------------------------------------------
// Take only first 50 collection watches
// ---------------------------------------------

const first50 = collectionWatches.slice(0, 50);

// ---------------------------------------------
// Create detailed data
// ---------------------------------------------

const watchDetails = first50.map((watch) => {

  const detail = detailedWatches.find(
    (item) =>
      item.reference?.toLowerCase() ===
      watch.reference?.toLowerCase()
  );

  return {
    reference: watch.reference,

    collection: watch.collection,

    material: watch.material,

    name:
      detail?.raw_datasource?.name?.jsonValue?.value ||
      watch.reference,

    marketingTitle:
      detail?.marketing_title ||
      "",

    description:
      detail?.marketing_text ||
      "",

    // -----------------------------------------
    // Technical information
    // -----------------------------------------

    movement:
      detail?.movement?.fields?.Name?.value ||
      detail?.movement?.displayName ||
      "",

    powerReserve:
      detail?.power_reserve || "",

    frequency:
      detail?.frequency || "",

    balanceWheel:
      detail?.balance_wheel || "",

    caseDiameter:
      detail?.case_dimension || "",

    caseThickness:
      detail?.case_height || "",

    waterResistance:
      detail?.water_resistance || "",

    strap:
      detail?.strap || "",

    // -----------------------------------------
    // Images
    //
    // IMPORTANT:
    // Main image comes from watches_list.json
    // because those URLs are already working.
    // -----------------------------------------

    image: watch.image || "",

    frontImage:
      detail?.front_image?.src ||
      watch.image ||
      "",

    backImage:
      detail?.back_image?.src ||
      "",

    // Original product page
    sourceUrl:
      detail?.url || watch.url || ""
  };
});

// ---------------------------------------------
// Save new JSON
// ---------------------------------------------

fs.writeFileSync(
  "./frontend/src/data/watch_details_50.json",
  JSON.stringify(watchDetails, null, 2)
);

console.log("");
console.log("======================================");
console.log(" watch_details_50.json created");
console.log("======================================");
console.log(`Total watches: ${watchDetails.length}`);
console.log("");

watchDetails.slice(0, 3).forEach((watch, index) => {
  console.log(`${index + 1}. ${watch.reference}`);
  console.log(`   Collection: ${watch.collection}`);
  console.log(`   Image: ${watch.image ? "YES" : "NO"}`);
  console.log(`   Details: ${watch.description ? "YES" : "NO"}`);
});