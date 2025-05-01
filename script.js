// Quiz Data
const quizData = [
  {
    "question": "A 47-year-old man undergoes repair for an abdominal aortic aneurysm. During the surgery, the left renal vein is accidentally compressed between two major vessels. Which symptom would most likely develop postoperatively?",
    "choices": [
      "Hypertension in the right adrenal gland",
      "Hematuria and left-sided varicocele",
      "Hypotension due to adrenal crisis",
      "Right flank pain and elevated BUN",
      "Difficulty in abducting the thigh"
    ],
    "correctAnswer": 1,
    "explanation": "Compression of the left renal vein between the superior mesenteric artery and aorta causes Nutcracker syndrome. This leads to increased venous pressure, causing hematuria and left-sided varicocele. The right kidney is not involved, adrenal crisis is unrelated, and lumbar plexus injury would cause motor deficits, not venous congestion."
  },
  {
    "question": "A 6-year-old boy has a congenital defect where the sympathetic innervation of his suprarenal (adrenal) medulla is disrupted. Which of the following best describes why the sympathetic control of the adrenal medulla is unique?",
    "choices": [
      "It uses postganglionic fibers that synapse directly onto the adrenal cortex",
      "It uses preganglionic fibers that synapse directly onto chromaffin cells",
      "It uses parasympathetic fibers from the posterior vagal trunk",
      "It uses somatic motor neurons from the anterior horn of the spinal cord",
      "It bypasses the celiac ganglion entirely"
    ],
    "correctAnswer": 1,
    "explanation": "The adrenal medulla is innervated by sympathetic preganglionic fibers that synapse directly onto chromaffin cells, which are modified postganglionic neurons secreting catecholamines. Parasympathetic and somatic innervation are not involved, and although the fibers pass near the celiac ganglion, they do not synapse there."
  },
  {
    "question": "A 22-year-old male is found to have a left-sided varicocele. Further imaging shows no mass obstructing venous drainage. What is the anatomic reason why the left gonadal vein is more prone to varicocele formation compared to the right?",
    "choices": [
      "The left gonadal vein drains directly into the IVC",
      "The right gonadal vein has a shorter and more direct route to the IVC",
      "The left gonadal vein crosses anterior to the aorta before entering the IVC",
      "The right gonadal vein is compressed between the aorta and SMA",
      "Both gonadal veins have equivalent drainage paths"
    ],
    "correctAnswer": 1,
    "explanation": "The right gonadal vein drains directly into the IVC, whereas the left drains into the left renal vein before reaching the IVC. This longer and higher-pressure pathway makes left-sided varicoceles more common. The left gonadal vein does not cross anterior to the aorta, and the drainage pathways are asymmetric."
  },
  {
    "question": "A trauma patient has a penetrating injury through the posterior abdominal wall affecting the T12 anterior rami. Which nerve is most likely compromised?",
    "choices": [
      "Iliohypogastric nerve",
      "Genitofemoral nerve",
      "Lateral femoral cutaneous nerve",
      "Subcostal nerve",
      "Femoral nerve"
    ],
    "correctAnswer": 3,
    "explanation": "The subcostal nerve is the anterior ramus of T12 and runs along the posterior abdominal wall. It supplies motor innervation to abdominal wall muscles and sensory innervation to the skin over the hip. The other listed nerves originate from lumbar plexus roots (L1 or higher) rather than T12."
  },
  {
    "question": "During dissection, a student notices that a structure is passing through the diaphragm at the T10 level, accompanied by anterior and posterior vagal trunks. Which structure is this?",
    "choices": [
      "Inferior vena cava",
      "Esophagus",
      "Aorta",
      "Thoracic duct",
      "Greater splanchnic nerve"
    ],
    "correctAnswer": 1,
    "explanation": "The esophagus passes through the esophageal hiatus at the T10 level along with the anterior and posterior vagal trunks. The IVC passes through the diaphragm at T8, while the aorta and thoracic duct pass behind the diaphragm at T12. The greater splanchnic nerve pierces the crura separately."
  },
  {
    "question": "A 7-year-old boy presents with sudden-onset facial and leg swelling. Urinalysis reveals massive proteinuria with minimal hematuria. A kidney biopsy under light microscopy appears normal, but electron microscopy reveals widespread podocyte foot process effacement. Which of the following best describes the primary defect in this disease?",
    "choices": [
      "Disruption of glomerular basement membrane synthesis",
      "Loss of podocyte slit diaphragm integrity",
      "Loss of fenestrations in glomerular capillary endothelium",
      "Hyperplasia of mesangial cells",
      "Destruction of parietal epithelial cells"
    ],
    "correctAnswer": 1,
    "explanation": "This patient has Minimal Change Disease, the most common cause of nephrotic syndrome in children. The hallmark feature is effacement of the podocyte foot processes, leading to loss of slit diaphragm integrity and massive proteinuria. (A) GBM synthesis defects are seen in Alport syndrome. (C) Fenestrated endothelium dysfunction would cause more hematuria. (D) Mesangial hyperplasia is seen in IgA nephropathy. (E) Parietal cells form the outer capsule and are not directly involved.)"
  },
  {
    "question": "A 60-year-old woman presents with worsening renal function. Biopsy shows nodular glomerulosclerosis (Kimmelstiel-Wilson nodules), thickened basement membranes, and mesangial expansion. Which of the following is the most likely underlying etiology of her renal disease?",
    "choices": [
      "Autoimmune deposition of anti-GBM antibodies",
      "Poorly controlled diabetes mellitus",
      "Chronic hypertension with vascular sclerosis",
      "Amyloid light-chain deposition",
      "Poststreptococcal glomerulonephritis"
    ],
    "correctAnswer": 1,
    "explanation": "The described findings — nodular glomerulosclerosis (Kimmelstiel-Wilson lesions), thickened GBM, and mesangial expansion — are classic for diabetic nephropathy. (A) Anti-GBM antibody disease leads to linear IgG staining and rapidly progressive glomerulonephritis. (C) Hypertension typically causes hyaline arteriolosclerosis and glomerulosclerosis but not nodules. (D) Amyloidosis would show Congo red positivity. (E) Poststreptococcal GN shows hypercellularity and immune complex deposition.)"
  },
  {
    "question": "A histological section of the renal cortex reveals convoluted tubules with a dense brush border and numerous mitochondria located between extensive basolateral membrane infoldings. Which of the following is the primary function of these structures?",
    "choices": [
      "Secretion of potassium into tubular lumen",
      "Reabsorption of filtered glucose and amino acids",
      "Regulation of acid-base balance via bicarbonate secretion",
      "Sensing of sodium concentration in tubular fluid",
      "Filtration of plasma across the glomerular barrier"
    ],
    "correctAnswer": 1,
    "explanation": "The proximal convoluted tubule (PCT) is characterized by a dense apical brush border (microvilli) and abundant mitochondria. Its main role is reabsorption of nearly all filtered glucose, amino acids, bicarbonate, and significant amounts of sodium and water. (A) Potassium secretion occurs in collecting ducts. (C) Distal tubules and collecting ducts regulate acid-base balance. (D) Sodium sensing is the function of macula densa cells. (E) Filtration occurs at the glomerular capillary loops, not tubules.)"
  },
{
  "question": "A 52-year-old man presents with acute onset left-sided flank pain radiating to the groin. A non-contrast CT scan reveals a 5-mm kidney stone lodged in the ureter. At which of the following anatomic sites is the stone most likely to be impacted?",
  "choices": [
    "Crossing over the quadratus lumborum muscle",
    "Crossing under the gonadal vessels",
    "Crossing anterior to the psoas major muscle",
    "Crossing the pelvic brim at the iliac vessels",
    "Crossing behind the rectus abdominis muscle"
  ],
  "correctAnswer": 3,
  "explanation": "Kidney stones most commonly lodge at one of three ureteral constrictions: 1) the ureteropelvic junction, 2) where the ureter crosses over the pelvic brim (iliac vessels), and 3) at the ureterovesical junction (where the ureter enters the bladder). Crossing the pelvic brim at the iliac vessels is a major point of constriction and a common site of stone impaction. (A, B, C, E) These are not true anatomic constriction points for the ureter."
},
  {
    "question": "A 22-year-old man is evaluated for hematuria. Urine collection shows a urine creatinine concentration of 100 mg/dL, a plasma creatinine of 2 mg/dL, and a urine flow rate of 1 mL/min. What is this patient's estimated creatinine clearance?",
    "choices": [
      "25 mL/min",
      "50 mL/min",
      "75 mL/min",
      "100 mL/min",
      "150 mL/min"
    ],
    "correctAnswer": 1,
    "explanation": "Creatinine clearance is calculated as (Urine Creatinine x Urine Flow Rate) / Plasma Creatinine. (100 mg/dL x 1 mL/min) / 2 mg/dL = 50 mL/min. (A) 25 is too low. (C-E) Overestimate his clearance based on given numbers."
  },
  {
    "question": "A substance is filtered freely at the glomerulus but undergoes partial reabsorption by the renal tubules. Compared to GFR, how will the clearance of this substance behave?",
    "choices": [
      "Clearance will be greater than GFR",
      "Clearance will equal GFR",
      "Clearance will be less than GFR",
      "Clearance will depend solely on plasma concentration",
      "Clearance will be unrelated to glomerular or tubular function"
    ],
    "correctAnswer": 2,
    "explanation": "If a substance is reabsorbed after filtration, its clearance will be less than GFR. (A) Secretion would lead to greater clearance than GFR. (B) Equal clearance happens when no secretion or reabsorption occurs (e.g., inulin). (D-E) Clearance is linked to glomerular/tubular function, not just plasma concentration."
  },
  {
    "question": "A patient with acute tubular necrosis undergoes a measurement of fractional excretion of sodium (FeNa), and it is found to be 5%. What does this result most likely indicate?",
    "choices": [
      "Pre-renal azotemia with intact tubular function",
      "Volume depletion with high renal sodium reabsorption",
      "Intrinsic renal failure with impaired tubular sodium reabsorption",
      "Normal glomerular filtration with low urine output",
      "Hyperaldosteronism driving potassium secretion"
    ],
    "correctAnswer": 2,
    "explanation": "A FeNa greater than 2% suggests intrinsic renal tubular injury (like ATN), where the tubules are unable to reabsorb sodium effectively. (A-B) In pre-renal states, FeNa is typically <1%. (D) Normal GFR would not explain high FeNa. (E) Hyperaldosteronism impacts potassium, not sodium fractional excretion directly.)"
  },
  {
    "question": "A 32-year-old pregnant woman undergoes a fetal ultrasound at 20 weeks gestation. The fetus is found to have oligohydramnios, limb deformities, flattened facial features, and hypoplastic lungs. Bilateral renal agenesis is confirmed. Which of the following developmental events most likely failed in this fetus?",
    "choices": [
      "Induction of the ureteric bud by the mesonephric duct",
      "Fusion of the inferior poles of the metanephric kidneys",
      "Canalization of the mesonephric duct",
      "Development of the pronephros in the cervical region",
      "Descent of the fetal bladder into the pelvis"
    ],
    "correctAnswer": 0,
    "explanation": "Bilateral renal agenesis occurs when the ureteric bud fails to develop or fails to induce the metanephric blastema. This prevents nephron formation, leading to absence of urine production and oligohydramnios. (A) Correct. (B) Fusion of the poles results in horseshoe kidney. (C) Mesonephric duct canalization is involved in early development, but not directly related to metanephros formation. (D) The pronephros is non-functional and degenerates. (E) Bladder descent occurs later and is unrelated to renal agenesis.)"
  },
  {
    "question": "A newborn girl presents with a mass at the umbilicus that occasionally leaks clear fluid. Imaging reveals a persistent tract from the bladder to the umbilicus. Which embryological structure failed to regress?",
    "choices": [
      "Allantois",
      "Mesonephric duct",
      "Cloaca",
      "Paramesonephric duct",
      "Metanephric blastema"
    ],
    "correctAnswer": 0,
    "explanation": "A patent urachus is a failure of the allantois to obliterate, resulting in a fistula between the bladder and the umbilicus. (A) Correct. (B) Mesonephric duct forms the male genital ducts. (C) The cloaca is partitioned early in development and doesn’t persist as a tract. (D) The paramesonephric duct is related to female reproductive tract, not the urinary bladder. (E) The metanephric blastema forms nephrons, not bladder or urachus.)"
  },
  {
    "question": "A 2-week-old male infant presents with a urinary tract infection. Ultrasound shows a duplicated collecting system with two ureters draining one kidney. Which of the following best explains this anomaly?",
    "choices": [
      "Failure of the metanephric blastema to differentiate",
      "Incomplete degeneration of the mesonephric tubules",
      "Abnormal early bifurcation of the ureteric bud",
      "Failure of the ureteric bud to reach the cloaca",
      "Persistence of the pronephric duct"
    ],
    "correctAnswer": 2,
    "explanation": "Bifid ureters or duplicated collecting systems arise from early bifurcation or duplication of the ureteric bud before it interacts with the metanephric blastema. (A) Would cause renal agenesis or dysplastic kidney. (B) Mesonephric tubules are not involved in ureter duplication. (C) Correct. (D) This would cause complete absence of the ureter. (E) The pronephros degenerates early and doesn’t contribute to this anomaly.)"
  }, 
  {
    "question": "A 40-year-old man has blood pressure of 85/55 mmHg after significant dehydration. His kidneys maintain GFR despite the drop in systemic pressure. Which mechanism most likely explains this preserved GFR?",
    "choices": [
      "Preferential constriction of the afferent arteriole",
      "Increased release of nitric oxide from macula densa cells",
      "Preferential constriction of the efferent arteriole by angiotensin II",
      "Decreased sympathetic tone to the afferent arteriole",
      "Activation of peritubular capillary oncotic pressure"
    ],
    "correctAnswer": 2,
    "explanation": "During volume depletion or hypotension, angiotensin II preferentially constricts the efferent arteriole, maintaining glomerular capillary pressure and GFR. (A) Afferent constriction would decrease GFR. (B) Macula densa cells release adenosine, not NO, during low NaCl. (C) Correct. (D) Sympathetic tone usually increases in low BP. (E) Peritubular oncotic pressure affects reabsorption, not GFR maintenance.)"
  },
  {
    "question": "A researcher measures the following capillary forces in a rat nephron: glomerular hydrostatic pressure = 60 mmHg, Bowman's space hydrostatic pressure = 30 mmHg, glomerular oncotic pressure = 20 mmHg, Bowman's space oncotic pressure = 0 mmHg. What is the net filtration pressure (NFP)?",
    "choices": [
      "+50 mmHg",
      "+30 mmHg",
      "+10 mmHg",
      "0 mmHg",
      "-10 mmHg"
    ],
    "correctAnswer": 2,
    "explanation": "NFP = P_gc - P_bs - π_gc + π_bs = 60 - 30 - 20 + 0 = +10 mmHg. (A) Would require no opposing forces. (B) Ignores oncotic pressure. (C) Correct. (D) NFP of zero implies no filtration. (E) Negative NFP would cause reabsorption, which doesn’t occur in glomeruli.)"
  },
  {
    "question": "A 65-year-old man with long-standing hypertension presents with elevated serum creatinine. Urinalysis shows significant proteinuria. Which of the following best explains this patient's renal findings?",
    "choices": [
      "Failure of the myogenic mechanism to regulate afferent tone",
      "Angiotensin II-mediated vasodilation of efferent arterioles",
      "Excessive NO release by macula densa leading to glomerular collapse",
      "Tubuloglomerular feedback inhibition due to low sodium delivery",
      "Overactivation of aldosterone causing osmotic diuresis"
    ],
    "correctAnswer": 0,
    "explanation": "In hypertensive nephrosclerosis, damage to afferent autoregulation (e.g., myogenic reflex) causes glomerular hypertension, proteinuria, and nephron loss. (A) Correct. (B) Ang II constricts efferent, not dilates. (C) NO isn't over-released in this setting. (D) TGF is activated, not inhibited, in high NaCl. (E) Aldosterone promotes Na reabsorption, not osmotic diuresis.)"
  },
  {
    "question": "A 25-year-old healthy man has a blood glucose level of 250 mg/dL after a large sugary meal. Which of the following best explains why glucose begins to appear in his urine?",
    "choices": [
      "Filtration of glucose is blocked due to afferent arteriolar constriction",
      "Glucose transporters in the proximal tubule are fully saturated",
      "The thick ascending limb becomes impermeable to glucose",
      "Glucose secretion increases due to elevated plasma concentration",
      "Glucose is reabsorbed paracellularly only at low concentrations"
    ],
    "correctAnswer": 1,
    "explanation": "Glucose is filtered freely and reabsorbed in the proximal tubule via Na+-glucose symporters, which display a transport maximum (Tm). Once plasma glucose exceeds ~200 mg/dL, these transporters become saturated and excess glucose appears in urine. (A) Glucose filtration is not blocked by afferent arteriolar tone. (B) Correct. (C) The thick ascending limb doesn’t reabsorb glucose. (D) Glucose is not secreted. (E) Glucose is reabsorbed transcellularly, not paracellularly.)"
  },
  {
    "question": "A 48-year-old man is given furosemide for volume overload. Which of the following best describes the site of action of this drug and the resulting effect on electrolyte handling?",
    "choices": [
      "Proximal tubule; inhibition of Na+-glucose symporter",
      "Thick ascending limb; inhibition of Na+-K+-2Cl− transporter",
      "Early distal tubule; inhibition of Na+-Cl− cotransporter",
      "Late distal tubule; blockade of H+-ATPase in intercalated cells",
      "Collecting duct; inhibition of water channels via ADH receptor antagonism"
    ],
    "correctAnswer": 1,
    "explanation": "Furosemide inhibits the Na+-K+-2Cl− cotransporter in the thick ascending limb, reducing reabsorption of Na+, K+, and Cl− and promoting diuresis. (A) This is the mechanism of glucose reabsorption, not loop diuretics. (B) Correct. (C) Describes thiazide diuretics. (D) Affects acid-base balance, not loop diuretics. (E) Describes ADH antagonists, not furosemide.)"
  },
  {
    "question": "A 67-year-old woman has worsening chronic kidney disease. Her serum BUN is 80 mg/dL and creatinine is 4.5 mg/dL. Which of the following best explains the mechanism of urea reabsorption in the nephron under normal conditions?",
    "choices": [
      "Actively secreted by the proximal tubule using Na+-urea co-transport",
      "Reabsorbed by paracellular diffusion in the thick ascending limb",
      "Freely filtered, passively reabsorbed in proximal tubule and collecting duct",
      "Reabsorbed by endocytosis in the early distal tubule",
      "Secreted in the collecting duct under the control of aldosterone"
    ],
    "correctAnswer": 2,
    "explanation": "Urea is freely filtered and about 50% is passively reabsorbed in the proximal tubule. An additional 10% is reabsorbed in the medullary collecting duct via facilitated diffusion, which is enhanced by ADH. (A) Urea is not co-transported with Na+. (B) Thick ascending limb is impermeable to urea. (C) Correct. (D) Endocytosis is used for protein handling, not urea. (E) Aldosterone affects Na+/K+ exchange, not urea handling.)"
  },
  {
    "question": "A 24-year-old man presents with polyuria and polydipsia. His serum sodium is elevated and urine osmolality is low. Administration of desmopressin increases his urine osmolality significantly. Which nephron segment is most directly responsible for the water reabsorption improved by this therapy?",
    "choices": [
      "Proximal convoluted tubule",
      "Thick ascending limb of the loop of Henle",
      "Early distal convoluted tubule",
      "Cortical and medullary collecting ducts",
      "Bowman's capsule"
    ],
    "correctAnswer": 3,
    "explanation": "Desmopressin (DDAVP) is a synthetic analog of ADH that acts on V2 receptors in the collecting ducts to insert aquaporin-2 water channels, allowing water reabsorption. (A) PCT reabsorbs water isosmotically, independent of ADH. (B) TAL is water-impermeable. (C) Early DCT is also impermeable to water. (D) Correct. (E) Bowman's capsule is involved in filtration, not reabsorption.)"
  },
  {
    "question": "A 63-year-old man with heart failure is given furosemide to manage his volume overload. Furosemide inhibits a specific transporter in the thick ascending limb. Which of the following electrolytes is likely to show increased urinary excretion as a direct result of this medication?",
    "choices": [
      "Phosphate",
      "Magnesium",
      "Bicarbonate",
      "Hydrogen ion",
      "Glucose"
    ],
    "correctAnswer": 1,
    "explanation": "Furosemide inhibits the Na+-K+-2Cl− symporter in the thick ascending limb, which disrupts the positive luminal voltage that normally drives paracellular reabsorption of cations like magnesium and calcium. Thus, urinary magnesium excretion increases. (A) Phosphate is mostly handled in the PCT. (B) Correct. (C) Bicarbonate reabsorption is mainly in PCT and is indirectly affected. (D) H+ secretion occurs in distal tubule/collecting duct, not primarily affected. (E) Glucose handling occurs in PCT.)"
  },
  {
    "question": "A researcher examines urea handling along the nephron. In which of the following segments is urea reabsorption most enhanced by ADH under physiologic conditions?",
    "choices": [
      "Proximal tubule",
      "Thick ascending limb",
      "Early distal convoluted tubule",
      "Cortical collecting duct",
      "Medullary collecting duct"
    ],
    "correctAnswer": 4,
    "explanation": "ADH enhances the permeability of the medullary collecting duct to both water and urea, promoting urea reabsorption via urea transporters (UT-A1/UT-A3). This contributes to the corticomedullary osmotic gradient necessary for urine concentration. (A) PCT reabsorbs ~50% of urea passively, but ADH doesn't regulate this step. (B-C) Ascending limb and DCT are impermeable to urea. (D) Cortical collecting duct is impermeable to urea. (E) Correct.)"
  },
  {
    "question": "A 19-year-old woman is found to have mild proteinuria during routine screening. Her glomerular filtration barrier appears intact. Which of the following best explains how the proximal tubule normally handles small amounts of filtered protein under physiological conditions?",
    "choices": [
      "Reabsorbed via Na+-dependent co-transporters",
      "Reabsorbed by bulk paracellular diffusion",
      "Internalized by receptor-mediated endocytosis followed by lysosomal degradation",
      "Secreted into the tubular lumen by ATP-driven pumps",
      "Excreted unchanged in urine"
    ],
    "correctAnswer": 2,
    "explanation": "Small amounts of protein that cross the glomerular filter are reabsorbed by receptor-mediated endocytosis in the proximal tubule. They are subsequently degraded in lysosomes into amino acids and reabsorbed. (A) Glucose and amino acids use Na+-co-transporters, but not proteins. (B) Paracellular reabsorption handles ions, not large proteins. (C) Correct. (D) Proteins are reabsorbed, not secreted. (E) Under normal conditions, proteins should not appear significantly in urine.)"
  },
  {
    "question": "A 34-year-old man is admitted for confusion and lethargy. Labs reveal serum sodium of 121 mEq/L. He is started on hypertonic saline. On the second hospital day, his urine osmolality remains >600 mOsm/kg. Which of the following is the most likely cause of this persistent urinary concentration?",
    "choices": [
      "Inhibition of aldosterone in the cortical collecting duct",
      "Increased secretion of atrial natriuretic peptide",
      "Continued stimulation of aquaporin insertion by vasopressin",
      "Suppression of Na+/K+/2Cl− transport in the thick ascending limb",
      "Increased free water excretion due to low plasma osmolality"
    ],
    "correctAnswer": 2,
    "explanation": "In hyponatremia, ADH secretion is typically suppressed. However, if urine osmolality remains high despite hypertonic saline, it suggests inappropriate ADH secretion (SIADH) is still present, leading to continued aquaporin-2 insertion and water reabsorption in the collecting ducts. (A) Aldosterone affects sodium, not water. (B) ANP promotes diuresis, not concentration. (C) Correct. (D) Na-K-2Cl inhibition would dilute urine. (E) Free water is being retained, not excreted.)"
  },
  {
    "question": "A 60-year-old shipwreck survivor drinks seawater for survival. Two days later, he presents with confusion and dry mucous membranes. His serum Na+ is 156 mEq/L, and urine output is high. Which physiological limitation best explains why seawater worsened his dehydration?",
    "choices": [
      "Renal inability to upregulate aquaporin-2 channels",
      "Maximal urine concentrating ability is insufficient to excrete solute load",
      "Failure to reabsorb sodium in the thick ascending limb",
      "Aldosterone-mediated water loss in collecting ducts",
      "Suppression of ADH due to volume depletion"
    ],
    "correctAnswer": 1,
    "explanation": "Seawater has high osmolarity (~2400 mOsm/L). Since humans can concentrate urine only to ~1200 mOsm/L, excreting the salt load requires more water than is ingested, leading to net water loss and worsened dehydration. (A) Aquaporins are likely increased, not decreased. (B) Correct. (C) Na+ is reabsorbed efficiently in healthy kidneys. (D) Aldosterone retains Na+ and water. (E) ADH is increased, not suppressed.)"
  },
  {
    "question": "A 29-year-old woman on a high-protein diet has higher urine concentration than her twin sister on a low-protein diet. If both have similar ADH levels, what mechanism explains the difference in concentrating ability?",
    "choices": [
      "Enhanced urea cycling increases medullary interstitial osmolarity",
      "Greater sodium excretion increases medullary tonicity",
      "Low-protein diet decreases thick ascending limb transport",
      "High-protein intake suppresses aldosterone release",
      "Enhanced water permeability in the proximal tubule"
    ],
    "correctAnswer": 0,
    "explanation": "High-protein intake raises urea production, enhancing recycling via ADH-stimulated urea transporters (UT-A1) in the inner medullary collecting duct. This boosts medullary hypertonicity, improving water reabsorption. (A) Correct. (B) Na+ is reabsorbed, not excreted. (C) TAL transport is not directly protein-dependent. (D) Aldosterone responds to K+/volume, not protein. (E) PCT permeability isn’t hormone-regulated.)"
  },
  {
    "question": "A patient has normal urine output despite severely decreased vasa recta blood flow after hypotension. Which of the following mechanisms most likely preserved the corticomedullary gradient under these conditions?",
    "choices": [
      "Reduced thick ascending limb NaCl reabsorption",
      "Decreased aquaporin insertion in cortical collecting duct",
      "Passive solute and water exchange in the vasa recta",
      "Upregulation of distal convoluted tubule urea transporters",
      "Decreased urea reabsorption in the collecting duct"
    ],
    "correctAnswer": 2,
    "explanation": "The countercurrent exchanger (vasa recta) uses passive exchange to prevent washout of the medullary gradient. Reduced blood flow enhances time for solute exchange, preserving the gradient. (A) TAL activity helps create gradient. (B) Aquaporins affect water, not solute gradient. (C) Correct. (D) Urea transport is not prominent in DCT. (E) Urea reabsorption is increased with ADH.)"
  },
  {
    "question": "A patient with reduced renal perfusion shows increased sodium reabsorption in the proximal tubule. Which hemodynamic factor most likely drives this enhanced sodium retention?",
    "choices": [
      "Decreased peritubular capillary oncotic pressure",
      "Increased peritubular capillary hydrostatic pressure",
      "Efferent arteriole constriction increasing peritubular oncotic pressure",
      "Decreased aldosterone levels",
      "Inhibition of Na+/K+ ATPase in proximal tubule"
    ],
    "correctAnswer": 2,
    "explanation": "Efferent arteriole constriction increases filtration fraction and raises oncotic pressure in peritubular capillaries, enhancing sodium and water reabsorption from the tubule. (A) Low oncotic pressure impairs reabsorption. (B) High hydrostatic pressure opposes reabsorption. (C) Correct. (D) Aldosterone acts on collecting duct, not PCT. (E) Na+/K+ ATPase is required for PCT function.)"
  },
  {
    "question": "A 45-year-old man with Conn syndrome (primary hyperaldosteronism) presents with hypertension and hypokalemia. Which of the following molecular changes is most directly responsible for his findings?",
    "choices": [
      "Decreased Na+/K+ ATPase expression in principal cells",
      "Upregulation of ENaC channels in the distal nephron",
      "Increased aquaporin-2 insertion in the cortical collecting duct",
      "Suppression of ADH leading to polyuria",
      "Reduced aldosterone receptor activity in the medulla"
    ],
    "correctAnswer": 1,
    "explanation": "Aldosterone increases expression of ENaC and Na+/K+ ATPase in principal cells of the collecting duct, leading to sodium retention, volume expansion (hypertension), and potassium loss (hypokalemia). (A) ENaC and ATPase are both upregulated. (B) Correct. (C) ADH regulates aquaporins, not aldosterone. (D) ADH may be suppressed secondarily, but not the cause. (E) Aldosterone acts in cortex, not medulla.)"
  },
  {
    "question": "A 68-year-old woman with chronic heart failure is hospitalized for worsening edema. She has elevated atrial pressures. Which of the following best describes the renal effect of atrial natriuretic peptide (ANP) in this setting?",
    "choices": [
      "Increased sodium reabsorption in the proximal tubule",
      "Stimulation of aldosterone synthesis",
      "Dilation of afferent arteriole and inhibition of ENaC",
      "Decreased glomerular filtration rate via mesangial contraction",
      "Increased sodium reabsorption in thick ascending limb"
    ],
    "correctAnswer": 2,
    "explanation": "ANP is released in response to atrial stretch and causes afferent dilation and ENaC inhibition, promoting natriuresis and diuresis. It also inhibits renin and aldosterone. (A) Sodium reabsorption is reduced. (B) Aldosterone is suppressed. (C) Correct. (D) GFR increases, not decreases. (E) Na+ reabsorption is not directly stimulated in TAL by ANP.)"
  },
  {
    "question": "A 63-year-old man with congestive heart failure develops hyperkalemia. Labs show elevated creatinine and low urine output. Despite low plasma aldosterone, potassium continues to accumulate. Which of the following mechanisms best explains this patient's impaired potassium excretion?",
    "choices": [
      "Reduced Na+/K+ ATPase activity in the proximal tubule",
      "Decreased potassium secretion due to reduced distal nephron flow",
      "Increased K+ reabsorption in the thick ascending limb",
      "Increased aldosterone resistance in intercalated cells",
      "Enhanced Na+ reabsorption in the early proximal tubule"
    ],
    "correctAnswer": 1,
    "explanation": "In heart failure, renal perfusion decreases, lowering distal tubular flow, which impairs K+ secretion by principal cells in the cortical collecting duct. (A) Na+/K+ ATPase dysfunction occurs in hypoxia but is not flow-dependent. (B) Correct. (C) K+ is secreted, not reabsorbed, in distal nephron. (D) Aldosterone acts on principal cells. (E) Proximal Na+ reabsorption doesn’t affect distal K+ handling directly.)"
  },
  {
    "question": "A 28-year-old woman on a low-calcium, low-phosphate diet is found to have elevated parathyroid hormone levels. Which renal mechanism most accurately describes the adaptive change that allows preservation of calcium levels in this patient?",
    "choices": [
      "Upregulation of sodium-phosphate cotransporters in the proximal tubule",
      "Increased calcium excretion due to elevated distal tubular flow",
      "Stimulation of calcium reabsorption in the distal tubule via PTH",
      "Decreased paracellular sodium reabsorption in the proximal tubule",
      "Inhibition of Na+/K+/2Cl− cotransporter in thick ascending limb"
    ],
    "correctAnswer": 2,
    "explanation": "PTH increases calcium reabsorption in the distal tubule via apical calcium channels and basolateral Na+/Ca²⁺ exchangers. (A) PTH downregulates, not upregulates, Na-phosphate cotransporters. (B) PTH reduces Ca²⁺ excretion. (C) Correct. (D) Na+ reabsorption is not the target here. (E) Inhibition of TAL transporter is a loop diuretic effect, not physiological.)"
  },
  {
    "question": "A 35-year-old man with a high-phosphate diet is found to have mild hypocalcemia and elevated parathyroid hormone levels. Which of the following best describes how PTH acts to restore homeostasis in this patient?",
    "choices": [
      "It increases phosphate reabsorption in the distal tubule and stimulates vitamin D3 activation",
      "It suppresses calcium reabsorption in the proximal tubule while increasing phosphate excretion",
      "It reduces phosphate reabsorption in the proximal tubule and enhances calcium reabsorption in distal tubule",
      "It enhances both calcium and phosphate retention in the loop of Henle",
      "It increases phosphate reabsorption via upregulation of proximal sodium-phosphate transporters"
    ],
    "correctAnswer": 2,
    "explanation": "PTH promotes calcium retention and phosphate excretion. It increases distal calcium reabsorption and decreases proximal phosphate reabsorption by reducing the Tmax of Na-phosphate cotransporters. (A) PTH inhibits phosphate reabsorption. (B) Calcium is not suppressed in PCT. (C) Correct. (D) PTH suppresses phosphate reabsorption. (E) Opposite of PTH action.)"
  }
  ];
let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let answeredQuestions = JSON.parse(sessionStorage.getItem("answeredQuestions")) || new Array(quizData.length).fill(false);
let explanationsShown = JSON.parse(sessionStorage.getItem("explanationsShown")) || new Array(quizData.length).fill(false);
let selectedAnswers = JSON.parse(sessionStorage.getItem("selectedAnswers")) || new Array(quizData.length).fill(null);

// DOM Elements
const questionText = document.getElementById("question-text");
const choicesContainer = document.getElementById("choices-container");
const explanationBox = document.getElementById("explanation");
const progressText = document.getElementById("progress");
const correctText = document.getElementById("correct");
const incorrectText = document.getElementById("incorrect");
const questionList = document.getElementById("question-list");
const quizContainer = document.querySelector(".quiz-content");
const resultsContainer = document.getElementById("results-container");

// Display Hotkey Info Popup
window.onload = function() {
    alert("Welcome to the quiz!\n\nHotkeys Available:\n- Space: Next Question\n- B: Previous Question\n- 1-5: Select Answer Choices\n Anki remotes should be compatible! \n\nGood luck!");
};

// Load Questions into Sidebar
quizData.forEach((_, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = index + 1;
    listItem.classList.add("question-bubble");
    listItem.onclick = () => loadQuestion(index);
    listItem.setAttribute("data-index", index);
    questionList.appendChild(listItem);
});

// Load Question
function loadQuestion(index) {
    if (index >= quizData.length) {
        showResults();
        return;
    }

    currentQuestionIndex = index;
    const q = quizData[index];
    
    questionText.textContent = q.question;
    choicesContainer.innerHTML = "";
    
    q.choices.forEach((choice, i) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.onclick = () => checkAnswer(i, button);
        button.classList.add("choice-btn");
        
        if (selectedAnswers[currentQuestionIndex] !== null) {
            if (i === selectedAnswers[currentQuestionIndex]) {
                button.style.backgroundColor = selectedAnswers[currentQuestionIndex] === q.correctAnswer ? "green" : "red";
            }
            if (i === q.correctAnswer) {
                button.style.backgroundColor = "green";
            }
        }
        
        choicesContainer.appendChild(button);
    });

    if (explanationsShown[currentQuestionIndex]) {
        explanationBox.textContent = q.explanation;
        explanationBox.classList.remove("hidden");
    } else {
        explanationBox.textContent = "";
        explanationBox.classList.add("hidden");
    }

    updateProgress();
}

// Check Answer
function checkAnswer(selectedIndex, button) {
    if (answeredQuestions[currentQuestionIndex]) return; // Prevent multiple answers

    const q = quizData[currentQuestionIndex];
    explanationBox.textContent = q.explanation;
    explanationBox.classList.remove("hidden");

    const questionBubble = document.querySelector(`.question-bubble[data-index="${currentQuestionIndex}"]`);

    if (selectedIndex === q.correctAnswer) {
        button.style.backgroundColor = "green";
        questionBubble.style.backgroundColor = "green";
        correctAnswers++;
    } else {
        button.style.backgroundColor = "red";
        questionBubble.style.backgroundColor = "red";
        incorrectAnswers++;
        
        // Highlight correct answer in green
        const buttons = choicesContainer.getElementsByTagName("button");
        buttons[q.correctAnswer].style.backgroundColor = "green";
    }

    answeredQuestions[currentQuestionIndex] = true; // Mark as answered
    explanationsShown[currentQuestionIndex] = true; // Keep explanation visible
    selectedAnswers[currentQuestionIndex] = selectedIndex;
    
    sessionStorage.setItem("answeredQuestions", JSON.stringify(answeredQuestions));
    sessionStorage.setItem("explanationsShown", JSON.stringify(explanationsShown));
    sessionStorage.setItem("selectedAnswers", JSON.stringify(selectedAnswers));
    
    updateProgress();
}

// Update Progress
function updateProgress() {
    progressText.textContent = `${currentQuestionIndex + 1}/${quizData.length}`;
    correctText.textContent = correctAnswers;
    incorrectText.textContent = incorrectAnswers;
}

// Show Final Results Popup
function showResultsPopup() {
    const scorePercentage = ((correctAnswers / quizData.length) * 100).toFixed(2);
    alert(`Quiz Completed!\n\nYour Score: ${correctAnswers}/${quizData.length} (${scorePercentage}%)\n\nCongratulations on finishing the quiz!`);
}

// Navigation Controls
document.getElementById("next-btn").onclick = () => {
    if (currentQuestionIndex + 1 >= quizData.length) {
        showResultsPopup();
    } else {
        loadQuestion(currentQuestionIndex + 1);
    }
};
document.getElementById("prev-btn").onclick = () => loadQuestion(Math.max(currentQuestionIndex - 1, 0));

// Hotkey Navigation & Answer Selection
document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        loadQuestion(currentQuestionIndex + 1);
    } else if (event.code === "KeyB") {
        loadQuestion(Math.max(currentQuestionIndex - 1, 0));
    } else if (event.key >= "1" && event.key <= "5") {
        const answerIndex = parseInt(event.key) - 1;
        if (answerIndex < quizData[currentQuestionIndex].choices.length) {
            const buttons = choicesContainer.getElementsByTagName("button");
            if (buttons[answerIndex]) {
                buttons[answerIndex].click();
            }
        }
    }
});

// Load First Question on Start
loadQuestion(0);
