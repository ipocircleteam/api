const randomDate = (start: Date, end: Date): Date => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};
export interface Ipo {
    id: string;
    series: "main" | "sme"; 
    ipoTracker?: {
      listing_price: number;
      issue_price: number;
    };
    ipoGmp?: {
      absolute_value: number[];
      instant: string[]; 
    };
    ipoDates?: {
      listing_date: string; 
    };
}

export const dummyIpos: Ipo[] = [
  {
    id: "1",
    series: "main",
    ipoTracker: {
      listing_price: 100,
      issue_price: 90,
    },
    ipoGmp: {
      absolute_value: [95],
      instant: [randomDate(new Date(2021, 0, 1), new Date()).toISOString()], // Example date
    },
    ipoDates: {
      listing_date: randomDate(new Date(2021, 0, 1), new Date()).toISOString(), // Example date
    },
  },
];

for (let i = 2; i <= 300; i++) {
  const series = i % 2 === 0 ? "main" : "sme";
  dummyIpos.push({
    id: i.toString(),
    series,
    ipoTracker: {
      listing_price: Math.floor(Math.random() * 150) + 50, 
      issue_price: Math.floor(Math.random() * 150) + 50, 
    },
    ipoGmp: {
      absolute_value: [Math.floor(Math.random() * 150) + 50],
      instant: [randomDate(new Date(2021, 0, 1), new Date()).toISOString()], 
    },
    ipoDates: {
      listing_date: randomDate(new Date(2021, 0, 1), new Date()).toISOString(), 
    },
  });
}


