export const programOptions = [
    {
        default: true,
        text: '-- Please select a program --',
        value: null
    },
    {
        text: 'blastn - DNA Query to DNA database',
        value: 'blastn'
    },
    {
        text: 'blastp - Protein query to protein database',
        value: 'blastp'
    },
    {
        text: 'blastx - Translated (6 frames) DNA query to protein database',
        value: 'blastx'
    },
    {
        text: 'tblastx - Translated (6 frames) DNA query to translated (6 frames) DNA database',
        value: 'tblastx'
    },
    {
        text: 'tblastn - Protein query to DNA (6 frames) DNA database',
        value: 'tblastn'
    }
]
export const organismOptions = [
    {
        text: '-- Please select an organism --',
        value: null
    },
    {
        text: 'All',
        value: null
    },
    {
        default: true,
        text: 'Dictyostelium discoideum',
        value: null
    },
    {
        text: 'Dictyostelium fasciculatum',
        value: null
    },
    {
        text: 'Dictoystelium purpureum',
        value: null
    }
]
export const databaseOptions = [
    {
        default: true,
        text: '-- Please select a database --',
        value: null
    },
    {
        text: 'D. discoideum Protein sequences - protein',
        value: null
    },
    {
        text: 'D. discoideum Coding sequences - DNA',
        value: null
    },
    {
        text: 'D. discoideum Non-coding sequences - DNA',
        value: null
    },
    {
        text: 'D. discoideum Genomic sequences - DNA',
        value: null
    },
    {
        text: 'D. discoideum EST sequences - DNA',
        value: null
    },
    {
        text: 'D. discoideum Chromosomal DNA: 1,2,3,4,5,6,M, and floating contigs - DNA',
        value: null
    }
]
export const eValueOptions = [
    {
        text: '1000',
        value: 1000
    },
    {
        text: '500',
        value: 500
    },
    {
        text: '100',
        value: 100
    },
    {
        text: '10',
        value: 10
    },
    {
        text: '1',
        value: 1
    },
    {
        default: true,
        text: '0.1',
        value: 0.1
    },
    {
        text: '0.001',
        value: 0.001
    },
    {
        text: '1e-5',
        value: 1e-5
    },
    {
        text: '1e-25',
        value: 1e-25
    },
    {
        text: '1e-50',
        value: 1e-50
    },
    {
        text: '1e-100',
        value: 1e-100
    }
]
export const alignmentOptions = [
    {
        text: '5',
        value: 5
    },
    {
        text: '25',
        value: 25
    },
    {
        default: true,
        text: '50',
        value: 50
    },
    {
        text: '100',
        value: 100
    },
    {
        text: '250',
        value: 250
    },
    {
        text: '500',
        value: 500
    },
    {
        text: '750',
        value: 750
    },
    {
        text: '1000',
        value: 1000
    }
]
export const wordSizeOptions = [
    {
        text: '2',
        value: 2
    },
    {
        default: true,
        text: '3',
        value: 3
    },
    {
        text: '4',
        value: 4
    },
    {
        text: '5',
        value: 5
    },
    {
        text: '6',
        value: 6
    },
    {
        text: '7',
        value: 7
    },
    {
        text: '8',
        value: 8
    },
    {
        text: '9',
        value: 9
    },
    {
        text: '10',
        value: 10
    },
    {
        text: '11',
        value: 11
    },
    {
        text: '12',
        value: 12
    },
    {
        text: '13',
        value: 13
    },
    {
        text: '14',
        value: 14
    },
    {
        text: '15',
        value: 15
    }
]
export const matrixOptions = [
    {
        text: 'BLOSUM45',
        value: 'BLOSUM45'
    },
    {
        default: true,
        text: 'BLOSUM62',
        value: 'BLOSUM62'
    },
    {
        text: 'BLOSUM80',
        value: 'BLOSUM80'
    },
    {
        text: 'PAM30',
        value: 'PAM30'
    },
    {
        text: 'PAM70',
        value: 'PAM70'
    }
]
