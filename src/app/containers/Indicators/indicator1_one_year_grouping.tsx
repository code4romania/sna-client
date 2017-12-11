import {INDICATOR1_TYPES} from './indicator1_types';

export interface DptDoughnutChartLabels {
  title: string;
  desc1: string;
  valueTitle: string;
  desc2: string;
}

export interface MediumReferenceLinearScaleLabels {
  title: string;
  note: string;
  desc: string;
}

export interface MixedVerticalBarChartMediumReferenceLinearScaleLabels {
  title: string;
}

export interface NominalScaleLabels {
  title: string;
}

export interface BinominalScaleLabels {
  title: string;
}

export const INDICATOR1_ONE_YEAR_GROUPING: Array<{
  categoryId: number;
  indicatorGrouping: Array<{
    indicators: number[];
    indicatorType: string;
    labels: (DptDoughnutChartLabels
      | MediumReferenceLinearScaleLabels
      | MixedVerticalBarChartMediumReferenceLinearScaleLabels
      | NominalScaleLabels
      | BinominalScaleLabels);
  }>
}> = [
  {
    categoryId: 1,
    indicatorGrouping: [
      {
        indicators: [10, 11, 12],
        indicatorType: INDICATOR1_TYPES.DPT_DOUGHNUT_CHART,
        labels: ({
          title: 'Număr de sesizări privind încălcări ale normelor',
          desc1: 'sesizări soluționate',
          valueTitle: 'decizii',
          desc2: 'sesizări în curs de soluționare',
        } as DptDoughnutChartLabels),
      },
      {
        indicators: [15],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Număr măsuri dispuse',
          note: '(fără a fi diferențiate pe tipuri)',
          desc: 'măsuri',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [14, 17, null],
        indicatorType: INDICATOR1_TYPES.DPT_DOUGHNUT_CHART,
        labels: ({
          title: 'Număr de decizii prin care s-a confirmat încălcarea normei',
          desc1: 'decizii ale comisiei anulate sau modificate în instanță',
          valueTitle: 'decizii',
          desc2: 'decizii neanulate sau modificate în instanță',
        } as DptDoughnutChartLabels),
      },
      {
        indicators: [18],
        indicatorType: INDICATOR1_TYPES.MIXED_VERTICAL_BAR_CHART_MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Gradul de cunoaștere de către angajați a normelor',
        } as MixedVerticalBarChartMediumReferenceLinearScaleLabels),
      },
      {
        indicators: [19],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Număr de activități de formare privind normele de conduită',
          note: null,
          desc: 'activități',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [20],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Număr persoane care au fost instruite prin formarea profesională',
          note: null,
          desc: 'persoane',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [21],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Nr. măsuri adoptate pentru înlăturarea cauzelor încălcării normelor',
          note: null,
          desc: 'măsuri',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [22, 23, null],
        indicatorType: INDICATOR1_TYPES.DPT_DOUGHNUT_CHART,
        labels: ({
          title: 'Număr persoane/instituție care au săvârșit abateri disciplinare',
          desc1: 'persoane care au săvârșit repetate abateri',
          valueTitle: 'persoane',
          desc2: 'persoane care au săvârșit nerepetate abateri',
        } as DptDoughnutChartLabels),
      },
      {
        indicators: [13],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Durata medie a procedurilor',
          note: null,
          desc: 'zile',
        } as MediumReferenceLinearScaleLabels),
      },
    ],
    // examples: [
    //   {
    //     indicators: [-10, -11, -12],
    //     indicatorType: INDICATOR1_TYPES.DPT_DOUGHNUT_CHART,
    //     labels: ({
    //       title: '-Număr de sesizări privind încălcări ale normelor',
    //       desc1: '-sesizări soluționate',
    //       valueTitle: '-decizii',
    //       desc2: '-sesizări în curs de soluționare',
    //     } as DptDoughnutChartLabels),
    //   },
    //   {
    //     indicators: [-15],
    //     indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
    //     labels: ({
    //       title: '-Număr măsuri dispuse',
    //       note: null,
    //       desc: '-măsuri',
    //     } as MediumReferenceLinearScaleLabels),
    //   },
    //   {
    //     indicators: [-15],
    //     indicatorType: INDICATOR1_TYPES.BIMEDIUM_REFERENCE_LINEAR_SCALE,
    //     labels: ({
    //       title: '-Număr măsuri dispuse',
    //       note: null,
    //       desc: '-măsuri',
    //     } as MediumReferenceLinearScaleLabels),
    //   },
    //   {
    //     indicators: [-18],
    //     indicatorType: INDICATOR1_TYPES.MIXED_VERTICAL_BAR_CHART_MEDIUM_REFERENCE_LINEAR_SCALE,
    //     labels: ({
    //       title: '-Gradul de cunoaștere de către angajați a normelor',
    //     } as MixedVerticalBarChartMediumReferenceLinearScaleLabels),
    //   },
    //   {
    //     indicators: [-16],
    //     indicatorType: INDICATOR1_TYPES.NOMINAL_SCALE,
    //     labels: ({
    //       title: '-Scurtă descriere a măsurilor dispuse',
    //     } as NominalScaleLabels),
    //   },
    //   {
    //     indicators: [-16],
    //     indicatorType: INDICATOR1_TYPES.BINOMINAL_SCALE,
    //     labels: ({
    //       title: '-Scurtă descriere a măsurilor dispuse',
    //     } as BinominalScaleLabels),
    //   },
    // ]
  },
  {
    categoryId: 2,
    indicatorGrouping: [
      {
        indicators: [24, 25, 26],
        indicatorType: INDICATOR1_TYPES.DPT_DOUGHNUT_CHART,
        labels: ({
          title: 'Număr de persoane care au obligaţia depunerii declaraţiei de avere',
          desc1: 'persoane care nu au depus în termen declaraţii de avere',
          valueTitle: 'persoane',
          desc2: 'persoane care nu au depus declaraţii de avere',
        } as DptDoughnutChartLabels),
      },
      {
        indicators: [27],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Număr de sesizări ale ANI',
          note: null,
          desc: 'sesizări',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [28, 29, null],
        indicatorType: INDICATOR1_TYPES.DPT_DOUGHNUT_CHART,
        labels: ({
          title: 'Număr decizii ANI ca urmare a sesizărilor transmise de instituție',
          desc1: 'decizii ale ANI puse în aplicare',
          valueTitle: 'decizii',
          desc2: null,
        } as DptDoughnutChartLabels),
      },
      {
        indicators: [33],
        indicatorType: INDICATOR1_TYPES.MIXED_VERTICAL_BAR_CHART_MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Gradul de cunoaștere de către angajați a normelor privind declararea averilor',
        } as MixedVerticalBarChartMediumReferenceLinearScaleLabels),
      },
      {
        indicators: [30],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Număr hotărari ale instanțelor de judecată ca urmare a sesizărilor ANI',
          note: null,
          desc: 'hotărari',
        } as MediumReferenceLinearScaleLabels),
      },

      {
        indicators: [31],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Nr. măsuri adoptate pentru inlaturarea cauzelor incalcarii normelor',
          note: null,
          desc: 'măsuri',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [32],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Numar de consultații oferite privind declaratiile de avere si declaratiile de interese',
          note: null,
          desc: 'măsuri',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [34],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Număr de activități de formare privind declarațiile de avere',
          note: null,
          desc: 'activităti',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [35],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Număr persoane instruite prin actiuni de formare profesională',
          note: null,
          desc: 'persoane',
        } as MediumReferenceLinearScaleLabels),
      },
    ],
  },
  {
    categoryId: 3,
    indicatorGrouping: [
      {
        indicators: [36],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Numar de cadouri primite si inregistrate in registru',
          note: null,
          desc: 'cadouri',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [38],
        indicatorType: INDICATOR1_TYPES.BINOMINAL_SCALE,
        labels: ({
          title: 'Publicarea anuală a inventarului pe site-ul institutiei',
        } as BinominalScaleLabels),
      },
      {
        indicators: [39],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Numar de situatii in care s-a achizitionat cadoul',
          note: null,
          desc: 'situatii',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [40],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Valoarea cadourilor achizitionate',
          note: null,
          desc: 'EUR',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [37],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Valoarea fiecarui cadou primit',
          note: null,
          desc: 'EUR',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [41],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Valoarea cadourilor primite',
          note: null,
          desc: 'EUR',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [42],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Valoarea cadourilor valorificate',
          note: null,
          desc: 'EUR',
        } as MediumReferenceLinearScaleLabels),
      },
    ],
  },
  {
    categoryId: 4,
    indicatorGrouping: [
      {
        indicators: [43],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Declaratii de abtinere',
          note: null,
          desc: 'declaratii',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [44],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Situatii in care superiorul ierarhic a dispus inlocuirea persoanei in potential conflict de interese',
          note: null,
          desc: 'EUR',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [45],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: `Sesizări primite de institutie de la terte persoane cu privire la existenta
           unui conflict de interese`,
          note: null,
          desc: 'sesizări',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [46],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Decizii ANI prin care s-a constatat starea de conflict de interese',
          note: null,
          desc: 'decizii',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [47],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Sesizări ale parchetului privind posibila savarsire a infractiunii de conflicte de interese',
          note: null,
          desc: 'sesizări',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [48],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Număr de rechizitorii privind savarsirea infractiunii de conflicte de interese',
          note: null,
          desc: 'rechizitorii/condamnări',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [50],
        indicatorType: INDICATOR1_TYPES.MIXED_VERTICAL_BAR_CHART_MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Gradul de cunoastere de către angajati a normelor privind conflictul de interese',
        } as MixedVerticalBarChartMediumReferenceLinearScaleLabels),
      },
      {
        indicators: [51],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Activităti de formare',
          note: null,
          desc: 'activităti',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [52],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Persoane care au fost instruite prin intermediul actiunilor de formare profesionala',
          note: null,
          desc: 'persoane',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [49],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Număr de condamnări pentru conflict de interese',
          note: null,
          desc: 'condamnări',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [53],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Proceduri de achizitie analizate',
          note: null,
          desc: 'proceduri',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [54],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Avertismente de integritate emise',
          note: null,
          desc: 'avertismente',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [55],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Număr conflicte de interese prevenite',
          note: null,
          desc: 'condamnări',
        } as MediumReferenceLinearScaleLabels),
      },
    ],
  },
  {
    categoryId: 5,
    indicatorGrouping: [
      {
        indicators: [56],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Sedinte de consultare',
          note: null,
          desc: 'sedinte',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [57],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Angajati care au beneficiat de consiliere',
          note: null,
          desc: 'angajati',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [58],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Spete, diferentiate pe tipologii de dileme etice',
          note: null,
          desc: 'spete',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [60],
        indicatorType: INDICATOR1_TYPES.MIXED_VERTICAL_BAR_CHART_MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Gradul de cunoastere de către angajati a normelor privind consilierul etic/pentru integritate',
        } as MixedVerticalBarChartMediumReferenceLinearScaleLabels),
      },
      {
        indicators: [61],
        indicatorType: INDICATOR1_TYPES.MIXED_VERTICAL_BAR_CHART_MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Gradul de popularizare a rolului consilierului de etică/pentru integritate',
        } as MixedVerticalBarChartMediumReferenceLinearScaleLabels),
      },
      {
        indicators: [62],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Activităti de formare',
          note: null,
          desc: 'activităti',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [63],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Persoane care au fost instruite prin intermediul actiunilor de formare profesionala',
          note: null,
          desc: 'persoane',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [59],
        indicatorType: INDICATOR1_TYPES.NOMINAL_SCALE,
        labels: ({
          title: 'Prezentare tipologii de dileme etice',
        } as NominalScaleLabels),
      },
    ],
  },
  {
    categoryId: 6,
    indicatorGrouping: [
      {
        indicators: [64],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Persoane aflate in stare de incompatibilitate',
          note: null,
          desc: 'persoane',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [65],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Sesizări ale ANI formulate de către institutie',
          note: null,
          desc: 'sesizări',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [66],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Sesizări primite de institutie de la terte persoane cu privire la existenta unei incompatibilitati',
          note: null,
          desc: 'sesizări',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [67],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Decizii ale ANI cu privire la constatarea unor incompatibilităti',
          note: null,
          desc: 'decizii',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [69],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Măsuri administrative adoptate pentru inlăturarea cauzelor sau circumstantelor',
          note: null,
          desc: 'măsuri',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [70],
        indicatorType: INDICATOR1_TYPES.MIXED_VERTICAL_BAR_CHART_MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Gradul de cunoastere de către angajati a normelor privind incompatibilitatea',
        } as MixedVerticalBarChartMediumReferenceLinearScaleLabels),
      },
      {
        indicators: [71],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Activităti de formare',
          note: null,
          desc: 'activităti',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [72],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Persoane care au fost instruite prin intermediul actiunilor de formare profesionala',
          note: null,
          desc: 'persoane',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [68],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Număr decizii confirmate de instantă',
          note: null,
          desc: 'decizii',
        } as MediumReferenceLinearScaleLabels),
      },
    ],
  },
  {
    categoryId: 7,
    indicatorGrouping: [
      {
        indicators: [74],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Anunturi publice privind proiectele de acte normative',
          note: null,
          desc: 'anunturi',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [75],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: `Recomandari transmise de societatea civila privind completarea sau modificarea
           proiectelor de acte normative`,
          note: null,
          desc: 'recomandări',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [76],
        indicatorType: INDICATOR1_TYPES.MIXED_VERTICAL_BAR_CHART_MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Gradul de acceptare si preluare al recomandarilor formulate de societatea civila',
        } as MixedVerticalBarChartMediumReferenceLinearScaleLabels),
      },
      {
        indicators: [80],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Numar sedinte publice organizate la initiativa institutiei',
          note: null,
          desc: 'sedinte',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [81],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Participanti la sedintele publice',
          note: null,
          desc: 'participanti',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [86],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Plangeri in justitie privind nerespectarea prevederilor legale de catre institutie',
          note: null,
          desc: 'plangeri',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [87],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Sanctiuni dispuse pentru incalcarea obligatiilor legale',
          note: null,
          desc: 'sanctiuni',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [89],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Activitati de pregatire profesionala a personalului din administratia publica',
          note: null,
          desc: 'activitati',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [90],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Persoane instruite prin intermediul actiunilor de formare profesionala',
          note: null,
          desc: 'persoane',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [73],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Numar proiecte de acte normative adoptate',
          note: null,
          desc: 'proiecte',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [77],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Numar proiecte de acte normative modificate dupa consultare',
          note: null,
          desc: 'proiecte',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [78],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Numar propuneri preluate in forma finala a actului normativ',
          note: null,
          desc: 'propuneri',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [79],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Numar raspunsuri la propunerile nepreluate',
          note: null,
          desc: 'raspunsuri',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [82],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: `Numar cetateni inscrisi in baza de date a institutiei pentru a fi informate
           despre proiecte de acte normative`,
          note: null,
          desc: 'cetateni',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [83],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: `Numar ONG-uri inscrise in baza de date a institutiei pentru a fi informate
           despre proiecte de acte normative`,
          note: null,
          desc: 'organizatii',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [84],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Numar sedinte publice organizate la cererea societatii civile',
          note: null,
          desc: 'sedinte',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [85],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Numar minute publicate, realizate la sedinte publice',
          note: null,
          desc: 'minute',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [91],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Numar rapoarte anuale despre transparenta decizionala disponibile pe site-ul institutiei',
          note: null,
          desc: 'rapoarte',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [88],
        indicatorType: INDICATOR1_TYPES.NOMINAL_SCALE,
        labels: ({
          title: 'Prezentare a tipurilor de sanctiuni dispuse pentru incalcarea obligatiilor legale',
        } as NominalScaleLabels),
      },
      {
        indicators: [92],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Numar părti interesate inscrise in Registrul Unic al Transparentei Intereselor',
          note: null,
          desc: 'părti',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [93],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Numar domenii in care s-au inscris parti interesate in Registrul Unic al Transparentei Intereselor',
          note: null,
          desc: 'domenii',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [94],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Numar utilizatori ai platformei consultare.gov.ro',
          note: null,
          desc: 'utilizatori',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [95],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: `Număr intalniri raportate in RUTI de catre factorii de decizie vizati
           de registru, din administratia publica`,
          note: null,
          desc: 'intalniri',
        } as MediumReferenceLinearScaleLabels),
      },
    ],
  },
  {
    categoryId: 8,
    indicatorGrouping: [
      {
        indicators: [98, 99, null],
        indicatorType: INDICATOR1_TYPES.DPT_DOUGHNUT_CHART,
        labels: ({
          title: 'Număr de răspunsuri comunicate',
          desc1: 'răspunsuri formulate cu intarziere, fată de termenul legal',
          valueTitle: 'răspunsuri',
          desc2: null,
        } as DptDoughnutChartLabels),
      },
      {
        indicators: [103],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Număr de plangeri in instantă',
          note: null,
          desc: 'solicitări',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [97, 100, null],
        indicatorType: INDICATOR1_TYPES.DPT_DOUGHNUT_CHART,
        labels: ({
          title: 'Număr de solicitări de informatii de interes public',
          desc1: 'solicitări la care nu s-a răspuns',
          valueTitle: 'solicitări',
          desc2: null,
        } as DptDoughnutChartLabels),
      },
      {
        indicators: [105],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Numărul si tipul de sanctiuni dispuse',
          note: null,
          desc: 'sanctiuni',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [101, 102, null],
        indicatorType: INDICATOR1_TYPES.DPT_DOUGHNUT_CHART,
        labels: ({
          title: 'Număr de reclamatii administrative',
          desc1: 'reclamatii administrative solutionate pozitiv',
          valueTitle: 'reclamatii',
          desc2: null,
        } as DptDoughnutChartLabels),
      },
      {
        indicators: [107],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Numar de activitati de pregatire profesionala a personalului din administratia publica',
          note: null,
          desc: 'activităti',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [108],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Persoane instruite prin intermediul actiunilor de formare profesionala',
          note: null,
          desc: 'persoane',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [96],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Seturi de date publicate in format deschis pe data.gov.ro',
          note: null,
          desc: 'seturi',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [106],
        indicatorType: INDICATOR1_TYPES.NOMINAL_SCALE,
        labels: ({
          title: 'Prezentare tip sanctiuni dispuse pentru incalcarea atributiilor legale',
        } as NominalScaleLabels),
      },
      {
        indicators: [109],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: `Numar masuri interne luate pentru imbunatatirea procesului de comunicare a 
          informatiilor de interes public`,
          note: null,
          desc: 'măsuri',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [111],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: `Numar UAT-uri care au implementat memorandumul privind cresterea transparentei 
          si standardizarea afisarii informatiilor de interes public`,
          note: null,
          desc: 'persoane',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [110],
        indicatorType: INDICATOR1_TYPES.NOMINAL_SCALE,
        labels: ({
          title: `Prezentare tip masuri interne luate pentru imbunatatirea procesului de comunicare
           a informatiilor de interes public`,
        } as NominalScaleLabels),
      },
      {
        indicators: [112],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Numar institutii publice cuprinse in platforma transparenta.gov.ro',
          note: null,
          desc: 'persoane',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [113],
        indicatorType: INDICATOR1_TYPES.BINOMINAL_SCALE,
        labels: ({
          title: 'Exista raportul de implementare a legii 544/2001 pentru ultimul an?',
        } as BinominalScaleLabels),
      },
      {
        indicators: [114],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Număr rapoarte anuale de activitate disponibile pe site-ul institutiei',
          note: null,
          desc: 'persoane',
        } as MediumReferenceLinearScaleLabels),
      },
    ],
  },
  {
    categoryId: 9,
    indicatorGrouping: [
      {
        indicators: [115],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Număr de sesizări',
          note: null,
          desc: 'sesizări',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [116],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Numărul normelor incălcate',
          note: null,
          desc: 'norme',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [118],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Număr de regulamente interne armonizate cu prevederile legislative',
          note: null,
          desc: 'regulamente',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [119],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Institutii in care exista persoane special desemnate pentru a primi sesizari',
          note: null,
          desc: 'institutii',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [120],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: `Numărul de instituţii în care există implementat un mecanism cu privire la
           protecţia avertizorilor de integritate`,
          note: null,
          desc: 'institutii',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [121],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: `Măsuri administrative adoptate pentru inlaturarea cauzelor sau circumstantelor
           care au favorizat incalcarea normelor`,
          note: null,
          desc: 'măsuri',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [122],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Situatii de represalii la locul de munca',
          note: null,
          desc: 'situatii',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [123],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Plangeri depuse in instanta',
          note: null,
          desc: 'plangeri',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [124],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Situatii in care au fost acordate compensatii avertizorilor de integritate',
          note: null,
          desc: 'situatii',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [125],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Activităti de pregatire profesionala a personalului din administratia publica',
          note: null,
          desc: 'activitati',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [126],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Persoane care au fost instruite prin intermediul actiunilor de formare profesionala',
          note: null,
          desc: 'persoane',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [117],
        indicatorType: INDICATOR1_TYPES.NOMINAL_SCALE,
        labels: ({
          title: 'Prezentare a tipurilor de norme incălcate',
        } as NominalScaleLabels),
      },
    ],
  },
  {
    categoryId: 10,
    indicatorGrouping: [
      {
        indicators: [127],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Persoane desemnate cu repartizarea aleatorie a sarcinilor de serviciu',
          note: null,
          desc: 'persoane',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [128],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Nereguli apărute in sistemul de distributie aleatorie, nediferentiat pe tipologii',
          note: null,
          desc: 'nereguli',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [129],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Măsuri luate de conducătorul institutiei pentru remedierea neregulilor constatate',
          note: null,
          desc: 'măsuri',
        } as MediumReferenceLinearScaleLabels),
      },
    ],
  },
  {
    categoryId: 11,
    indicatorGrouping: [
      {
        indicators: [131],
        indicatorType: INDICATOR1_TYPES.BIMEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: `Număr institutii in care există implementat un mecanism cu privire la monitorizarea
           situatiilor de pantouflage, inclusiv prin desemnarea unor persoane cu atributii speciale in acest sens`,
          note: null,
          desc: 'institutii',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [138],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Numarul sanctiunilor aplicate de catre instante',
          note: null,
          desc: 'sanctiuni',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [132],
        indicatorType: INDICATOR1_TYPES.BIMEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: `Numar de persoane care au desfasurat activitati de monitorizare si control cu privire
           la societati comerciale si care au iesit din corpul functionarilor publici`,
          note: null,
          desc: 'decizii',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [134],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Numar măsuri adoptate pentru remedierea situatiilor de pantouflage, diferentiat pe tipuri',
          note: null,
          desc: 'sesizări',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [139],
        indicatorType: INDICATOR1_TYPES.BIMEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: `Societăti comerciale in care isi desfasoara activitatea persoane care au derulat
           anterior activitati de monitorizare si control si care intra sub incidenta art. 13 alin.(1),
            diferentiat pe domenii majore de activitate`,
          note: null,
          desc: 'societăti',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [134],  // TODO placeholder binding(137? to check)
        indicatorType: INDICATOR1_TYPES.MIXED_VERTICAL_BAR_CHART_MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Gradul de cunoastere de catre angajati a normelor privind situatiile de pantouflage',
        } as MixedVerticalBarChartMediumReferenceLinearScaleLabels),
      },
      {
        indicators: [133],
        indicatorType: INDICATOR1_TYPES.BIMEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: `Persoane care isi desfasoara activitatea/dau consultanta in cadrul regiilor autonome,
           societatilor comerciale ori in alte unitati cu scop lucrativ din sectorul public, in termenul
            de 3 ani dupa iesirea din corpul functionarilor publici(dintre acele persoane care
             au interdictie conform legii)`,
          note: null,
          desc: 'persoane',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [136],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Numar de incalcari ale prevederilor art. 13 alin.(1) constatate',
          note: null,
          desc: 'incălcări',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [130],
        indicatorType: INDICATOR1_TYPES.BIMEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Număr de regulamente interne care prevad procedura monitorizarii situatiilor de pantouflage',
          note: null,
          desc: 'declaratii',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [135],
        indicatorType: INDICATOR1_TYPES.NOMINAL_SCALE,
        labels: ({
          title: 'Tipuri de măsuri adoptate pentru remedierea situatiilor de pantouflage',
        } as NominalScaleLabels),
      },
    ],
  },
  {
    categoryId: 12,
    indicatorGrouping: [
      {
        indicators: [140],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: `Număr functii sensibile si functii considerate ca fiind expuse la coruptie
           identificate si inventariate`,
          note: null,
          desc: 'functii',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [141],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: 'Număr persoane cărora li s-a aplicat principiul rotatiei personalului',
          note: null,
          desc: 'persoane',
        } as MediumReferenceLinearScaleLabels),
      },
      {
        indicators: [142],
        indicatorType: INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE,
        labels: ({
          title: `Număr masuri de control adecvate si suficiente pentru administrarea
           si gestionarea functiilor sensibile`,
          note: null,
          desc: 'măsuri',
        } as MediumReferenceLinearScaleLabels),
      },
    ],
  },
];
