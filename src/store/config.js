/* -- set app title --*/
const AppTitle = 'CelebrateNFT';

/* -- set app mode -- */
const AppMode = ['default'];

/* -- set API URLs --*/
const development = '';
const production = '';
const staging = '';

let ApiUrl =''; 
// let ApiSocket =''; 

switch(AppMode[0]){
    case "development":
        ApiUrl = development;
        break;
    case "production":
        ApiUrl = production;
        break;
    case "staging":
        ApiUrl = staging;
        break;
    default:
        ApiUrl = "";
}

export { AppTitle, ApiUrl, AppMode };
