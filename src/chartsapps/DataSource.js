export const stockData = [
   {CompenyName: 'IBM', Volumn: 2000},
   {CompenyName: 'Microsoft', Volumn: 220},
   {CompenyName: 'Oracle', Volumn: 1500},
   {CompenyName: 'Facebook', Volumn: 2900},
   {CompenyName: 'Google', Volumn: 3000},
   {CompenyName: 'Twitter', Volumn: 800}
];

export class DataProvider {
    getData(){
        let companies = [];
        let volumns = [];
        // this loop will provides labels
        stockData.forEach((c,i)=>{
            companies.push(c.CompenyName);
            volumns.push(c.Volumn);
        });

        return {
            lables:companies,
            data:volumns
        }
    }
}