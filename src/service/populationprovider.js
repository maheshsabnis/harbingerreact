export const Population =[
    {Country: 'India', Population:130},
    {Country: 'United States', Population:35},
    {Country: 'Russia', Population:85},
    {Country: 'England', Population:7},
    {Country: 'France', Population:5},
    {Country: 'China', Population:200},
    {Country: 'Canada', Population:8},
];

export class DataProvider {
    getData(){
        let labels=[];
        Population.forEach((p,i)=>{
            labels.push(p.Country);
        });
        let data=[];
        Population.forEach((p,i)=>{
            data.push(p.Population);
        });
        
        return {
            labels:labels,
            data:data
        };
    }
    
}