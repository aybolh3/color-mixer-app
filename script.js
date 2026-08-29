const i18n = {
  ar: { 
    dir: 'rtl', 
    appTitle: 'استوديو خلط الألوان - مطابق الصبغات', 
    logo: 'استوديو خلط الألوان', 
    lblLang: 'اللغة:', 
    lblUnit: 'وحدة القياس:', 
    optCaps: '🧢 معيار الأغطية', 
    optMl: '🧪 ملليلتر (ml)', 
    optG: '⚖️ غرام (g)', 
    titleStep1: '١. اختيار اللون المطلوب', 
    lblCustomColor: 'أو اختر درجة مخصصة:', 
    titleCapture: '📷 التقاط لون المادة:', 
    btnEyedropper: '👁️ أداة التقاط اللون', 
    lblUpload: '📁 رفع صورة / التقاط', 
    canvasHelpText: 'انقر في أي مكان على الصورة لالتقاط اللون!', 
    titleSaved: '💾 الوصفات المحفوظة', 
    recipePlaceholder: 'اسم الوصفة...', 
    btnSave: 'حفظ', 
    titleStep2: '٢. وصفة القياس والخلط', 
    btnPrint: '🖨️ طباعة / PDF', 
    lblDilution: 'المخفف / المذيب المطلوب:', 
    lblRatio: 'نسبة ١٥٪', 
    lblBatchScale: 'مضاعف الخلطة:', 
    lblLiterInput: 'أو حدد حجم الدفعة باللتر (L):', 
    unitCaps: 'أغطية', 
    unitLiter: 'لتر (L)', 
    unitMl: 'مل (ml)', 
    unitG: 'غرام (g)', 
    customColorName: 'درجة ملتقطة', 
    noSaved: 'لا توجد وصفات محفوظة بعد.', 
    btnLoad: 'تحميل', 
    presets: { mint: 'أخضر نعناعي', turquoise: 'تركواز', terracotta: 'تيراكوتا', lavender: 'خزامى', peach: 'خوخي' }, 
    bases: { white: 'قاعدة / صبغة بيضاء', blue: 'مركز أزرق', yellow: 'مركز أصفر', red: 'مركز أحمر', black: 'مركز أسود' } 
  },
  fr: { 
    dir: 'ltr', 
    appTitle: 'Studio de Mélange de Couleurs - Pigments', 
    logo: 'Studio de Mélange de Couleurs', 
    lblLang: 'Langue :', 
    lblUnit: 'Unité de mesure :', 
    optCaps: '🧢 Bouchons', 
    optMl: '🧪 Millilitre (ml)', 
    optG: '⚖️ Gramme (g)', 
    titleStep1: '1. Sélection de la couleur', 
    lblCustomColor: 'Ou choisissez une couleur personnalisée :', 
    titleCapture: '📷 Capturer la couleur :', 
    btnEyedropper: '👁️ Pipette de couleur', 
    lblUpload: '📁 Importer une photo / Caméra', 
    canvasHelpText: 'Cliquez sur l\'image pour capturer la couleur !', 
    titleSaved: '💾 Recettes enregistrées', 
    recipePlaceholder: 'Nom de la recette...', 
    btnSave: 'Enregistrer', 
    titleStep2: '2. Formule de mélange', 
    btnPrint: '🖨️ Imprimer / PDF', 
    lblDilution: 'Diluant / Solvant requis :', 
    lblRatio: 'Ratio de 15%', 
    lblBatchScale: 'Multiplicateur du mélange :', 
    lblLiterInput: 'Ou volume du lot en Litres (L) :', 
    unitCaps: 'bouchon(s)', 
    unitLiter: 'Litre (L)', 
    unitMl: 'ml', 
    unitG: 'g', 
    customColorName: 'Couleur capturée', 
    noSaved: 'Aucune recette enregistrée.', 
    btnLoad: 'Charger', 
    presets: { mint: 'Vert menthe', turquoise: 'Turquoise', terracotta: 'Terre cuite', lavender: 'Lavande', peach: 'Pêche' }, 
    bases: { white: 'Base / Pigment blanc', blue: 'Concentré bleu', yellow: 'Concentré jaune', red: 'Concentré rouge', black: 'Concentré noir' } 
  },
  en: { 
    dir: 'ltr', 
    appTitle: 'Color Mixing Studio - Pigment Matcher', 
    logo: 'Color Mixing Studio', 
    lblLang: 'Language:', 
    lblUnit: 'Measurement Unit:', 
    optCaps: '🧢 Bottle Caps', 
    optMl: '🧪 Milliliter (ml)', 
    optG: '⚖️ Gram (g)', 
    titleStep1: '1. Select Desired Color', 
    lblCustomColor: 'Or pick a custom color:', 
    titleCapture: '📷 Capture Material Color:', 
    btnEyedropper: '👁️ Color Picker', 
    lblUpload: '📁 Upload Image / Camera', 
    canvasHelpText: 'Click anywhere on the image to pick color!', 
    titleSaved: '💾 Saved Recipes', 
    recipePlaceholder: 'Recipe Name...', 
    btnSave: 'Save', 
    titleStep2: '2. Mixing Formula', 
    btnPrint: '🖨️ Print / PDF', 
    lblDilution: 'Required Solvent/Diluent:', 
    lblRatio: '15% Ratio', 
    lblBatchScale: 'Batch Scale Multiplier:', 
    lblLiterInput: 'Or specify batch volume in Liters (L):', 
    unitCaps: 'cap(s)', 
    unitLiter: 'Liter (L)', 
    unitMl: 'ml', 
    unitG: 'g', 
    customColorName: 'Captured Color', 
    noSaved: 'No saved recipes yet.', 
    btnLoad: 'Load', 
    presets: { mint: 'Mint Green', turquoise: 'Turquoise', terracotta: 'Terracotta', lavender: 'Lavender', peach: 'Peach' }, 
    bases: { white: 'White Base / Pigment', blue: 'Blue Concentrate', yellow: 'Yellow Concentrate', red: 'Red Concentrate', black: 'Black Concentrate' } 
  }
};

let currentLang = 'fr';

const presets = [
  { id: 'mint', hex: '#98ff98', recipe: { white: 5, yellow: 2, blue: 1 } },
  { id: 'turquoise', hex: '#40e0d0', recipe: { white: 4, blue: 3, yellow: 1 } },
  { id: 'terracotta', hex: '#e2725b', recipe: { white: 2, red: 4, yellow: 3, black: 1 } },
  { id: 'lavender', hex: '#e6e6fa', recipe: { white: 7, blue: 1, red: 1 } },
  { id: 'peach', hex: '#ffcba4', recipe: { white: 6, red: 1, yellow: 2 } }
];

let currentUnit = 'caps';
let activePreset = presets[1];
let currentRecipe = presets[1].recipe;
let currentHex = presets[1].hex;
let isCustom = false;
let batchScale = 1;
let customLiterVolume = null;
let savedRecipes = JSON.parse(localStorage.getItem('my_color_mixes') || '[]');

const baseHexes = { white: '#ffffff', blue: '#2563eb', yellow: '#eab308', red: '#ef4444', black: '#1e293b' };

function init() {
  const langSelect = document.getElementById('langSelect');
  if (langSelect) langSelect.value = currentLang;
  applyLanguage(currentLang);
  renderPresets();
  renderSavedRecipes();
  updateUI();
}

function changeLanguage(lang) { currentLang = lang; applyLanguage(lang); renderPresets(); renderSavedRecipes(); updateUI(); }

function applyLanguage(lang) {
  const t = i18n[lang];
  document.getElementById('htmlTag').setAttribute('dir', t.dir);
  document.getElementById('htmlTag').setAttribute('lang', lang);
  document.getElementById('pageTitle').innerText = t.appTitle;
  document.getElementById('appLogo').innerText = t.logo;
  document.getElementById('lblLang').innerText = t.lblLang;
  document.getElementById('lblUnit').innerText = t.lblUnit;
  document.getElementById('optCaps').innerText = t.optCaps;
  document.getElementById('optMl').innerText = t.optMl;
  document.getElementById('optG').innerText = t.optG;
  document.getElementById('titleStep1').innerText = t.titleStep1;
  document.getElementById('lblCustomColor').innerText = t.lblCustomColor;
  document.getElementById('titleCapture').innerText = t.titleCapture;
  document.getElementById('btnEyedropper').innerText = t.btnEyedropper;
  document.getElementById('txtUpload').innerText = t.lblUpload;
  document.getElementById('canvasHelpText').innerText = t.canvasHelpText;
  document.getElementById('titleSaved').innerText = t.titleSaved;
  document.getElementById('recipeNameInput').placeholder = t.recipePlaceholder;
  document.getElementById('btnSave').innerText = t.btnSave;
  document.getElementById('titleStep2').innerText = t.titleStep2;
  document.getElementById('btnPrint').innerText = t.btnPrint;
  document.getElementById('lblDilution').innerText = t.lblDilution;
  document.getElementById('lblRatio').innerText = t.lblRatio;
  document.getElementById('lblBatchScale').innerText = t.lblBatchScale;
  document.getElementById('lblLiterInput').innerText = t.lblLiterInput;
}

function changeUnit(unit) { currentUnit = unit; updateRecipeDisplay(); }

function renderPresets() {
  const container = document.getElementById('presetContainer');
  container.innerHTML = '';
  const t = i18n[currentLang];
  presets.forEach(preset => {
    const btn = document.createElement('button');
    btn.className = `preset-btn ${!isCustom && preset.hex === currentHex ? 'active' : ''}`;
    btn.onclick = () => selectPreset(preset);
    btn.innerHTML = `<div class="color-swatch" style="background-color: ${preset.hex};"></div><span class="preset-name">${t.presets[preset.id]}</span>`;
    container.appendChild(btn);
  });
}

function selectPreset(preset) { isCustom = false; activePreset = preset; currentRecipe = preset.recipe; currentHex = preset.hex; renderPresets(); updateUI(); }
function handleCustomColor(hex) { isCustom = true; currentHex = hex; currentRecipe = calculateCapsFromHex(hex); renderPresets(); updateUI(); }

async function useEyeDropper() {
  if ('EyeDropper' in window) {
    try {
      const eyeDropper = new EyeDropper();
      const result = await eyeDropper.open();
      handleCustomColor(result.sRGBHex);
    } catch (e) {}
  } else {
    alert(currentLang === 'ar' ? 'أداة الالتقاط المباشر غير مدعومة، يرجى استخدام رفع الصور.' : 'Color picker not supported, use upload.');
  }
}

function handleImageUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      const canvas = document.getElementById('imageCanvas');
      const ctx = canvas.getContext('2d');
      canvas.width = Math.min(img.width, 300);
      canvas.height = (img.height / img.width) * canvas.width;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      canvas.style.display = 'block';
      document.getElementById('canvasHelpText').style.display = 'block';
      canvas.onclick = function(evt) {
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        const x = (evt.clientX - rect.left) * scaleX;
        const y = (evt.clientY - rect.top) * scaleY;
        const pixel = ctx.getImageData(x, y, 1, 1).data;
        const hex = "#" + ((1 << 24) + (pixel[0] << 16) + (pixel[1] << 8) + pixel[2]).toString(16).slice(1);
        handleCustomColor(hex);
      };
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function calculateCapsFromHex(hex) {
  let cleanHex = hex.replace('#', '');
  if (cleanHex.length === 3) cleanHex = cleanHex.split('').map(c => c + c).join('');
  const r = parseInt(cleanHex.slice(0, 2), 16) || 0;
  const g = parseInt(cleanHex.slice(2, 4), 16) || 0;
  const b = parseInt(cleanHex.slice(4, 6), 16) || 0;
  let redCaps = Math.round((r / 255) * 4);
  let yellowCaps = Math.round((g / 255) * 3);
  let blueCaps = Math.round((b / 255) * 4);
  let whiteCaps = Math.round(((r + g + b) / (3 * 255)) * 5);
  const recipe = {};
  if (whiteCaps > 0) recipe.white = Math.max(1, whiteCaps);
  if (redCaps > 0) recipe.red = Math.max(1, redCaps);
  if (yellowCaps > 0) recipe.yellow = Math.max(1, yellowCaps);
  if (blueCaps > 0) recipe.blue = Math.max(1, blueCaps);
  return recipe;
}

function adjustScale(delta) {
  customLiterVolume = null;
  document.getElementById('literInput').value = '';
  batchScale = Math.max(1, Math.min(100, batchScale + delta));
  document.getElementById('scaleFactor').innerText = `${batchScale}x`;
  updateRecipeDisplay();
}

function handleLiterInput(val) {
  const liters = parseFloat(val);
  customLiterVolume = (!isNaN(liters) && liters > 0) ? liters : null;
  updateRecipeDisplay();
}

function updateUI() {
  const previewBox = document.getElementById('previewBox');
  previewBox.style.backgroundColor = currentHex;
  const t = i18n[currentLang];
  const displayName = isCustom ? `${t.customColorName} (${currentHex.toUpperCase()})` : t.presets[activePreset.id];
  document.getElementById('previewName').innerText = displayName;
  updateRecipeDisplay();
}

function updateRecipeDisplay() {
  const formulaContainer = document.getElementById('formulaContainer');
  formulaContainer.innerHTML = '';
  const t = i18n[currentLang];
  let totalBaseUnits = 0;
  let totalRecipeBaseCaps = 0;
  Object.values(currentRecipe).forEach(c => totalRecipeBaseCaps += c);

  Object.entries(currentRecipe).forEach(([baseKey, baseCaps]) => {
    let scaledCaps = customLiterVolume ? ((customLiterVolume * (baseCaps / totalRecipeBaseCaps)) * 1000) / 5 : baseCaps * batchScale;
    totalBaseUnits += scaledCaps;

    let displayValue = (Math.round(scaledCaps * 10) / 10).toFixed(scaledCaps % 1 === 0 ? 0 : 1);
    let unitText = t.unitCaps;

    if (customLiterVolume) {
      displayValue = (customLiterVolume * (baseCaps / totalRecipeBaseCaps)).toFixed(3);
      unitText = t.unitLiter;
    } else if (currentUnit === 'ml' || currentUnit === 'g') {
      displayValue = (scaledCaps * 5).toFixed(1);
      unitText = currentUnit === 'ml' ? t.unitMl : t.unitG;
    }

    const row = document.createElement('div');
    row.className = 'ingredient-row';
    row.innerHTML = `<div class="ingredient-info"><span class="color-swatch" style="width: 18px; height: 18px; background-color: ${baseHexes[baseKey]};"></span><span>${t.bases[baseKey]}</span></div><span class="cap-count-badge">${displayValue} ${unitText}</span>`;
    formulaContainer.appendChild(row);
  });

  const waterVal = totalBaseUnits * 0.15;
  let waterUnit = customLiterVolume ? `${(customLiterVolume * 0.15).toFixed(3)} ${t.unitLiter}` : (currentUnit === 'ml' || currentUnit === 'g') ? `${(waterVal * 5).toFixed(1)} ${currentUnit}` : `${waterVal.toFixed(1)} ${t.unitCaps}`;
  document.getElementById('waterAmount').innerText = `~${waterUnit}`;
}

function saveCurrentRecipe() {
  const nameInput = document.getElementById('recipeNameInput');
  const t = i18n[currentLang];
  const name = nameInput.value.trim() || `${t.recipePlaceholder.replace('...', '')} ${savedRecipes.length + 1}`;
  savedRecipes.push({ name, hex: currentHex, recipe: currentRecipe });
  localStorage.setItem('my_color_mixes', JSON.stringify(savedRecipes));
  nameInput.value = '';
  renderSavedRecipes();
}

function renderSavedRecipes() {
  const container = document.getElementById('savedListContainer');
  const t = i18n[currentLang];
  container.innerHTML = savedRecipes.length === 0 ? `<p style="font-size: 0.85rem; color: #94a3b8;">${t.noSaved}</p>` : '';
  savedRecipes.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'saved-item';
    div.innerHTML = `<div style="display:flex; align-items:center; gap:8px;"><div style="width:16px; height:16px; border-radius:50%; background:${item.hex};"></div><strong>${item.name}</strong></div><div><button class="btn btn-secondary" style="padding: 2px 8px; font-size:0.75rem;" onclick="loadRecipe(${index})">${t.btnLoad}</button> <button class="btn btn-secondary" style="padding: 2px 8px; font-size:0.75rem; color:red;" onclick="deleteRecipe(${index})">✕</button></div>`;
    container.appendChild(div);
  });
}

function loadRecipe(index) {
  const item = savedRecipes[index];
  isCustom = true; currentHex = item.hex; currentRecipe = item.recipe;
  renderPresets(); updateUI();
}

function deleteRecipe(index) {
  savedRecipes.splice(index, 1);
  localStorage.setItem('my_color_mixes', JSON.stringify(savedRecipes));
  renderSavedRecipes();
}

window.onload = init;

// ==================== ميزة الخلط الدائري المخصص (SVG المقسم) ====================

function handleCircleClick(event) {
  const rect = event.currentTarget.getBoundingClientRect();
  const x = event.clientX - rect.left - rect.width / 2;
  const y = event.clientY - rect.top - rect.height / 2;
  
  let angle = Math.atan2(y, x) * (180 / Math.PI) + 90;
  if (angle < 0) angle += 360;

  // تحديد الجزء المضغوط عليه بناءً على التقسيم المائل لدائرة SVG
  if (angle >= 0 && angle < 120) {
    document.getElementById('mixColor1').click(); // الجزء الأول (يمين أعلى)
  } else if (angle >= 120 && angle < 240) {
    document.getElementById('mixColor2').click(); // الجزء الثاني (أسفل)
  } else {
    document.getElementById('mixColor3').click(); // الجزء الثالث (يسار أعلى)
  }
}

function clearColor(id) {
  const el = document.getElementById(id);
  if (el) {
    el.value = '#ffffff';
    updateCustomTripleMix();
  }
}

function updateCustomTripleMix() {
  const c1 = document.getElementById('mixColor1')?.value || '#ffffff';
  const c2 = document.getElementById('mixColor2')?.value || '#ffffff';
  const c3 = document.getElementById('mixColor3')?.value || '#ffffff';

  // تحديث ألوان مسارات SVG الثلاثة بشكل مباشر
  const part1 = document.getElementById('svgPart1');
  const part2 = document.getElementById('svgPart2');
  const part3 = document.getElementById('svgPart3');

  if (part1) part1.setAttribute('fill', c1);
  if (part2) part2.setAttribute('fill', c2);
  if (part3) part3.setAttribute('fill', c3);

  // حساب درجة اللون المختلطة الناتجة
  const rgb1 = hexToRgb(c1);
  const rgb2 = hexToRgb(c2);
  const rgb3 = hexToRgb(c3);

  const r = Math.round((rgb1.r + rgb2.r + rgb3.r) / 3);
  const g = Math.round((rgb1.g + rgb2.g + rgb3.g) / 3);
  const b = Math.round((rgb1.b + rgb2.b + rgb3.b) / 3);

  const mixedHex = rgbToHex(r, g, b);

  // تحديث دائرة النتيجة واحتساب نسب القياس
  const resultCircle = document.getElementById('mixResultCircle');
  if (resultCircle) {
    resultCircle.style.backgroundColor = mixedHex;
  }

  if (typeof handleCustomColor === 'function') {
    handleCustomColor(mixedHex);
  }
}

function hexToRgb(hex) {
  let c = hex.replace('#', '');
  if (c.length === 3) c = c.split('').map(x => x + x).join('');
  const num = parseInt(c, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255
  };
}

function rgbToHex(r, g, b) {
  return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('mixColor1')) {
    updateCustomTripleMix();
  }
});
