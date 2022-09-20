import axios from "axios";

export const getData = () => {

    axios.get("https://geo.ipify.org/api/v2/country?apiKey=at_RfKC13rCGRPknY70jhLVO4zQ4iuRT").then(resp => {
        console.log(resp.data)

    })

}
