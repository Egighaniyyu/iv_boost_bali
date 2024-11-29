document.addEventListener("DOMContentLoaded", function () {
  const compositionAccordionBaliBellyInfusion = document.querySelector(
    "#accordion-open-bali-belly-infusion-composition button"
  );
  const compositionAccordionSuperBaliBellyIV = document.querySelector(
    "#accordion-open-super-bali-belly-iv-composition button"
  );
  const compositionAccordionBasicImmuneBooster = document.querySelector(
    "#accordion-open-basic-immune-booster-composition button"
  );

  const descriptionAccordionBaliBellyInfusion = document.querySelector(
    "#accordion-bali-belly-infusion"
  );
  const descriptionAccordionSuperBaliBellyIV = document.querySelector(
    "#accordion-super-bali-belly-iv"
  );
  const descriptionAccordionBasicImmuneBooster = document.querySelector(
    "#accordion-basic-immune-booster"
  );

  // Fungsi untuk menjaga tinggi description tetap h-full
  function maintainDescriptionHeight() {
    if (
      compositionAccordionBaliBellyInfusion.getAttribute("aria-expanded") ===
        "true" ||
      compositionAccordionBasicImmuneBooster.getAttribute("aria-expanded") ===
        "true" ||
      compositionAccordionSuperBaliBellyIV.getAttribute("aria-expanded") ===
        "true"
    ) {
      descriptionAccordionBaliBellyInfusion.classList.remove("h-full");
      descriptionAccordionBasicImmuneBooster.classList.remove("h-full");
      descriptionAccordionSuperBaliBellyIV.classList.remove("h-full");
    } else if (
      compositionAccordionBaliBellyInfusion.getAttribute("aria-expanded") ===
        "false" &&
      compositionAccordionBasicImmuneBooster.getAttribute("aria-expanded") ===
        "false" &&
      compositionAccordionSuperBaliBellyIV.getAttribute("aria-expanded") ===
        "false"
    ) {
      descriptionAccordionBaliBellyInfusion.classList.add("h-full");
      descriptionAccordionBasicImmuneBooster.classList.add("h-full");
      descriptionAccordionSuperBaliBellyIV.classList.add("h-full");
    }
  }

  // Event listener untuk memantau perubahan aria-expanded pada composition accordion
  compositionAccordionBaliBellyInfusion.addEventListener("click", function () {
    setTimeout(maintainDescriptionHeight, 100); // Memberikan sedikit delay untuk update
  });

  compositionAccordionBasicImmuneBooster.addEventListener("click", function () {
    setTimeout(maintainDescriptionHeight, 100); // Memberikan sedikit delay untuk update
  });

  compositionAccordionSuperBaliBellyIV.addEventListener("click", function () {
    setTimeout(maintainDescriptionHeight, 100); // Memberikan sedikit delay untuk update
  });

  // Set initial height saat page load
  maintainDescriptionHeight();
});

document.addEventListener("DOMContentLoaded", function () {
  const compositionAccordionStandardImmuneBooster = document.querySelector(
    "#accordion-open-standard-immune-booster-composition button"
  );
  const compositionAccordionSuperImmuneBooster = document.querySelector(
    "#accordion-open-super-immune-booster-composition button"
  );
  const compositionAccordionHangoverInfusion = document.querySelector(
    "#accordion-open-hangover-infusion-composition button"
  );

  const descriptionAccordionStandardImmuneBooster = document.querySelector(
    "#accordion-standard-immune-booster"
  );
  const descriptionAccordionSuperImmuneBooster = document.querySelector(
    "#accordion-super-immune-booster"
  );
  const descriptionAccordionHangoverInfusion = document.querySelector(
    "#accordion-hangover-infusion"
  );

  // Fungsi untuk menjaga tinggi description tetap h-full
  function maintainDescriptionHeight() {
    if (
      compositionAccordionStandardImmuneBooster.getAttribute(
        "aria-expanded"
      ) === "true" ||
      compositionAccordionSuperImmuneBooster.getAttribute("aria-expanded") ===
        "true" ||
      compositionAccordionHangoverInfusion.getAttribute("aria-expanded") ===
        "true"
    ) {
      descriptionAccordionStandardImmuneBooster.classList.remove("h-full");
      descriptionAccordionSuperImmuneBooster.classList.remove("h-full");
      descriptionAccordionHangoverInfusion.classList.remove("h-full");
    } else if (
      compositionAccordionStandardImmuneBooster.getAttribute(
        "aria-expanded"
      ) === "false" &&
      compositionAccordionSuperImmuneBooster.getAttribute("aria-expanded") ===
        "false" &&
      compositionAccordionHangoverInfusion.getAttribute("aria-expanded") ===
        "false"
    ) {
      descriptionAccordionStandardImmuneBooster.classList.add("h-full");
      descriptionAccordionSuperImmuneBooster.classList.add("h-full");
      descriptionAccordionHangoverInfusion.classList.add("h-full");
    }
  }

  // Event listener untuk memantau perubahan aria-expanded pada composition accordion

  compositionAccordionStandardImmuneBooster.addEventListener(
    "click",
    function () {
      setTimeout(maintainDescriptionHeight, 100); // Memberikan sedikit delay untuk update
    }
  );

  compositionAccordionSuperImmuneBooster.addEventListener("click", function () {
    setTimeout(maintainDescriptionHeight, 100); // Memberikan sedikit delay untuk update
  });

  compositionAccordionHangoverInfusion.addEventListener("click", function () {
    setTimeout(maintainDescriptionHeight, 100); // Memberikan sedikit delay untuk update
  });

  // Set initial height saat page load
  maintainDescriptionHeight();
});

document.addEventListener("DOMContentLoaded", function () {
  const compositionAccordionFeverInfusion = document.querySelector(
    "#accordion-open-fever-infusion-composition button"
  );
  const compositionAccordionGerdInfusion = document.querySelector(
    "#accordion-open-gerd-infusion-composition button"
  );
  const compositionAccordionIronInfusion = document.querySelector(
    "#accordion-open-iron-infusion-composition button"
  );

  const descriptionAccordionFeverInfusion = document.querySelector(
    "#accordion-fever-infusion"
  );
  const descriptionAccordionGerdInfusion = document.querySelector(
    "#accordion-gerd-infusion"
  );
  const descriptionAccordionIronInfusion = document.querySelector(
    "#accordion-iron-infusion"
  );

  // Fungsi untuk menjaga tinggi description tetap h-full
  function maintainDescriptionHeight() {
    if (
      compositionAccordionFeverInfusion.getAttribute("aria-expanded") ===
        "true" ||
      compositionAccordionGerdInfusion.getAttribute("aria-expanded") ===
        "true" ||
      compositionAccordionIronInfusion.getAttribute("aria-expanded") === "true"
    ) {
      descriptionAccordionFeverInfusion.classList.remove("h-full");
      descriptionAccordionGerdInfusion.classList.remove("h-full");
      descriptionAccordionIronInfusion.classList.remove("h-full");
    } else if (
      compositionAccordionFeverInfusion.getAttribute("aria-expanded") ===
        "false" &&
      compositionAccordionGerdInfusion.getAttribute("aria-expanded") ===
        "false" &&
      compositionAccordionIronInfusion.getAttribute("aria-expanded") === "false"
    ) {
      descriptionAccordionFeverInfusion.classList.add("h-full");
      descriptionAccordionGerdInfusion.classList.add("h-full");
      descriptionAccordionIronInfusion.classList.add("h-full");
    }
  }

  // Event listener untuk memantau perubahan aria-expanded pada composition accordion

  compositionAccordionFeverInfusion.addEventListener("click", function () {
    setTimeout(maintainDescriptionHeight, 100); // Memberikan sedikit delay untuk update
  });

  compositionAccordionGerdInfusion.addEventListener("click", function () {
    setTimeout(maintainDescriptionHeight, 100); // Memberikan sedikit delay untuk update
  });

  compositionAccordionIronInfusion.addEventListener("click", function () {
    setTimeout(maintainDescriptionHeight, 100); // Memberikan sedikit delay untuk update
  });

  // Set initial height saat page load
  maintainDescriptionHeight();
});

document.addEventListener("DOMContentLoaded", function () {
  const compositionAccordionCandidaIVTreatment = document.querySelector(
    "#accordion-open-candida-iv-treatment-composition button"
  );
  const compositionAccordionNADInfusion = document.querySelector(
    "#accordion-open-nad-infusion-composition button"
  );
  const compositionAccordionGymPowerInfusion = document.querySelector(
    "#accordion-open-gym-power-infusion-composition button"
  );

  const descriptionAccordionCandidaIVTreatment = document.querySelector(
    "#accordion-candida-iv-treatment"
  );
  const descriptionAccordionNADInfusion = document.querySelector(
    "#accordion-nad-infusion"
  );
  const descriptionAccordionGymPowerInfusion = document.querySelector(
    "#accordion-gym-power-infusion"
  );

  // Fungsi untuk menjaga tinggi description tetap h-full
  function maintainDescriptionHeight() {
    if (
      compositionAccordionCandidaIVTreatment.getAttribute("aria-expanded") ===
        "true" ||
      compositionAccordionNADInfusion.getAttribute("aria-expanded") ===
        "true" ||
      compositionAccordionGymPowerInfusion.getAttribute("aria-expanded") ===
        "true"
    ) {
      descriptionAccordionCandidaIVTreatment.classList.remove("h-full");
      descriptionAccordionNADInfusion.classList.remove("h-full");
      descriptionAccordionGymPowerInfusion.classList.remove("h-full");
    } else if (
      compositionAccordionCandidaIVTreatment.getAttribute("aria-expanded") ===
        "false" &&
      compositionAccordionNADInfusion.getAttribute("aria-expanded") ===
        "false" &&
      compositionAccordionGymPowerInfusion.getAttribute("aria-expanded") ===
        "false"
    ) {
      descriptionAccordionCandidaIVTreatment.classList.add("h-full");
      descriptionAccordionNADInfusion.classList.add("h-full");
      descriptionAccordionGymPowerInfusion.classList.add("h-full");
    }
  }

  // Event listener untuk memantau perubahan aria-expanded pada composition accordion

  compositionAccordionCandidaIVTreatment.addEventListener("click", function () {
    setTimeout(maintainDescriptionHeight, 100); // Memberikan sedikit delay untuk update
  });

  compositionAccordionNADInfusion.addEventListener("click", function () {
    setTimeout(maintainDescriptionHeight, 100); // Memberikan sedikit delay untuk update
  });

  compositionAccordionGymPowerInfusion.addEventListener("click", function () {
    setTimeout(maintainDescriptionHeight, 100); // Memberikan sedikit delay untuk update
  });

  // Set initial height saat page load
  maintainDescriptionHeight();
});

document.addEventListener("DOMContentLoaded", function () {
  const compositionAccordionGymRecoveryInfusion = document.querySelector(
    "#accordion-open-gym-recovery-infusion-composition button"
  );
  const compositionAccordionCovidImmuneBooster = document.querySelector(
    "#accordion-open-covid-immune-booster-composition button"
  );

  const descriptionAccordionGymRecoveryInfusion = document.querySelector(
    "#accordion-gym-recovery-infusion"
  );
  const descriptionAccordionCovidImmuneBooster = document.querySelector(
    "#accordion-covid-immune-booster"
  );

  // Fungsi untuk menjaga tinggi description tetap h-full
  function maintainDescriptionHeight() {
    if (
      compositionAccordionGymRecoveryInfusion.getAttribute("aria-expanded") ===
        "true" ||
      compositionAccordionCovidImmuneBooster.getAttribute("aria-expanded") ===
        "true"
    ) {
      descriptionAccordionGymRecoveryInfusion.classList.remove("h-full");
      descriptionAccordionCovidImmuneBooster.classList.remove("h-full");
    } else if (
      compositionAccordionGymRecoveryInfusion.getAttribute("aria-expanded") ===
        "false" &&
      compositionAccordionCovidImmuneBooster.getAttribute("aria-expanded") ===
        "false"
    ) {
      descriptionAccordionGymRecoveryInfusion.classList.add("h-full");
      descriptionAccordionCovidImmuneBooster.classList.add("h-full");
    }
  }

  // Event listener untuk memantau perubahan aria-expanded pada composition accordion

  compositionAccordionGymRecoveryInfusion.addEventListener(
    "click",
    function () {
      setTimeout(maintainDescriptionHeight, 100); // Memberikan sedikit delay untuk update
    }
  );

  compositionAccordionCovidImmuneBooster.addEventListener("click", function () {
    setTimeout(maintainDescriptionHeight, 100); // Memberikan sedikit delay untuk update
  });

  // Set initial height saat page load
  maintainDescriptionHeight();
});
