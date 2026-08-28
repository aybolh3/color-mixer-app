const i18n = {
  ar: { 
    dir: 'rtl', 
    appTitle: 'استوديو خلط الألوان - مطابق الصبغات', 
    logo: 'استوديو خلط الألوان', 
    lblLang: 'اللغة:', 
    lblUnit: 'وحدة القياس:', 
    optCaps: 'معيار الأغطية', 
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
    optCaps: 'Bouchons', 
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
    optCaps: 'Bottle Caps'🧢,
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
    row.innerHTML = `<div class="ingredient-info"><span class="color-swatch" style="width: 18px; height: 18px; background-color:
