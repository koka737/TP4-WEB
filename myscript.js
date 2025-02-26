const CORS_PROXY = "https://corsproxy.io/?url="; 
//const apikey=encodeURIComponent("eyJ4NXQiOiJZV0kxTTJZNE1qWTNOemsyTkRZeU5XTTRPV014TXpjek1UVmhNbU14T1RSa09ETXlOVEE0Tnc9PSIsImtpZCI6ImdhdGV3YXlfY2VydGlmaWNhdGVfYWxpYXMiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJBZGluYTAwLkBjYXJib24uc3VwZXIiLCJhcHBsaWNhdGlvbiI6eyJvd25lciI6IkFkaW5hMDAuIiwidGllclF1b3RhVHlwZSI6bnVsbCwidGllciI6IlVubGltaXRlZCIsIm5hbWUiOiJEZWZhdWx0QXBwbGljYXRpb24iLCJpZCI6MjQ0OTQsInV1aWQiOiJlOTM0ZWYxNi1jODU2LTQ0YWEtYmEwOC01NmE4YzRhMzUyMWUifSwiaXNzIjoiaHR0cHM6XC9cL3BvcnRhaWwtYXBpLm1ldGVvZnJhbmNlLmZyOjQ0M1wvb2F1dGgyXC90b2tlbiIsInRpZXJJbmZvIjp7IjUwUGVyTWluIjp7InRpZXJRdW90YVR5cGUiOiJyZXF1ZXN0Q291bnQiLCJncmFwaFFMTWF4Q29tcGxleGl0eSI6MCwiZ3JhcGhRTE1heERlcHRoIjowLCJzdG9wT25RdW90YVJlYWNoIjp0cnVlLCJzcGlrZUFycmVzdExpbWl0IjowLCJzcGlrZUFycmVzdFVuaXQiOiJzZWMifX0sImtleXR5cGUiOiJQUk9EVUNUSU9OIiwic3Vic2NyaWJlZEFQSXMiOlt7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJjYXJib24uc3VwZXIiLCJuYW1lIjoiQVJPTUUiLCJjb250ZXh0IjoiXC9wdWJsaWNcL2Fyb21lXC8xLjAiLCJwdWJsaXNoZXIiOiJhZG1pbl9tZiIsInZlcnNpb24iOiIxLjAiLCJzdWJzY3JpcHRpb25UaWVyIjoiNTBQZXJNaW4ifSx7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJjYXJib24uc3VwZXIiLCJuYW1lIjoiRG9ubmVlc1B1YmxpcXVlc0NsaW1hdG9sb2dpZSIsImNvbnRleHQiOiJcL3B1YmxpY1wvRFBDbGltXC92MSIsInB1Ymxpc2hlciI6ImFkbWluX21mIiwidmVyc2lvbiI6InYxIiwic3Vic2NyaXB0aW9uVGllciI6IjUwUGVyTWluIn0seyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoiY2FyYm9uLnN1cGVyIiwibmFtZSI6IkRvbm5lZXNQdWJsaXF1ZXNPYnNlcnZhdGlvbiIsImNvbnRleHQiOiJcL3B1YmxpY1wvRFBPYnNcL3YxIiwicHVibGlzaGVyIjoiYmFzdGllbmciLCJ2ZXJzaW9uIjoidjEiLCJzdWJzY3JpcHRpb25UaWVyIjoiNTBQZXJNaW4ifV0sImV4cCI6MTgzNTE3NTI4OSwidG9rZW5fdHlwZSI6ImFwaUtleSIsImlhdCI6MTc0MDUwMjQ4OSwianRpIjoiZThmNmUyZjktNTQ0MS00NzUzLWJlMGItN2NkNmI0OGI4M2QzIn0=.JyecKpf0DpsRO422NRC7UtdmlHevZsEEC2LzsCTpSedqtV5hsG01y1fzLHPtO90_IBYiFSpOBFFABaLKQTwQzPMWbzHmQTkkb0kn6fmEiHn4_UqrJykjjhXoExqKRXS5cPpj8reoFRUrpT5RLd9Ll89ptIjeNUvE0grIspjQZyMi5lwbnye4yQkmueBkXMuPZjfNYS5Vqc3Wai3ImaR57A0DlHVAFLMvDeb_xu9h5_YtnXnNyTgd00KecyOAf0UAcJSakU1PIpZn-M176H8qU9lvtHJfiaKoSJtc_4x5ZpBNittFGvrW5fhrP9HDaAtJcYHqnQ4AT8xzc0NvLSFC9w==");

const apikey=encodeURIComponent("eyJ4NXQiOiJZV0kxTTJZNE1qWTNOemsyTkRZeU5XTTRPV014TXpjek1UVmhNbU14T1RSa09ETXlOVEE0Tnc9PSIsImtpZCI6ImdhdGV3YXlfY2VydGlmaWNhdGVfYWxpYXMiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJkbW9pbmVzY3VAY2FyYm9uLnN1cGVyIiwiYXBwbGljYXRpb24iOnsib3duZXIiOiJkbW9pbmVzY3UiLCJ0aWVyUXVvdGFUeXBlIjpudWxsLCJ0aWVyIjoiVW5saW1pdGVkIiwibmFtZSI6IkRlZmF1bHRBcHBsaWNhdGlvbiIsImlkIjoyNDY0NiwidXVpZCI6IjJmN2I2YWM5LTA4MmMtNGQ2Mi05OWIyLTRlODEzMWRjNDQxNiJ9LCJpc3MiOiJodHRwczpcL1wvcG9ydGFpbC1hcGkubWV0ZW9mcmFuY2UuZnI6NDQzXC9vYXV0aDJcL3Rva2VuIiwidGllckluZm8iOnsiNTBQZXJNaW4iOnsidGllclF1b3RhVHlwZSI6InJlcXVlc3RDb3VudCIsImdyYXBoUUxNYXhDb21wbGV4aXR5IjowLCJncmFwaFFMTWF4RGVwdGgiOjAsInN0b3BPblF1b3RhUmVhY2giOnRydWUsInNwaWtlQXJyZXN0TGltaXQiOjAsInNwaWtlQXJyZXN0VW5pdCI6InNlYyJ9fSwia2V5dHlwZSI6IlBST0RVQ1RJT04iLCJzdWJzY3JpYmVkQVBJcyI6W3sic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImNhcmJvbi5zdXBlciIsIm5hbWUiOiJEb25uZWVzUHVibGlxdWVzT2JzZXJ2YXRpb24iLCJjb250ZXh0IjoiXC9wdWJsaWNcL0RQT2JzXC92MSIsInB1Ymxpc2hlciI6ImJhc3RpZW5nIiwidmVyc2lvbiI6InYxIiwic3Vic2NyaXB0aW9uVGllciI6IjUwUGVyTWluIn1dLCJleHAiOjE4MzUwODA1NDEsInRva2VuX3R5cGUiOiJhcGlLZXkiLCJpYXQiOjE3NDA0MDc3NDEsImp0aSI6IjQ5NTU0ZjhkLWJhNjktNGRkMS1hN2ExLTFhMjJjMWRkZDBhMyJ9.hy_-sJc-LQgqBzsacEpSmr0vbQdhADLbML-FNqK7_Rpl-O_JnqMSsGQnBMx1pjwPWQDucGwCvRe36fc3zJo3_aJJstdT9xz6PdLnE3uXk0IBO19RvaicQwRNJfWcj-KtMWpa0DNsBxVs9oHqg3nHgYOcYa1pbsYbHrhBVvW6_LvuPyo4hxbHwclG6WOQTsbQ_4VOLU9I-s-yqHF-3u2ro21NZ4eiUKPCVHHhxNm6gHF4P2Pg8KhC5uiVGcDXuPkZF1F0OwCQQ9iuzDUdi68iK8kMyFZ1AYG0h0CqcPRBEG3cPXK2bIF23MbZchIg7zamFX6okY3-iC25dLhUSK50CQ==");

stationName='MARSEILLE';

async function getStationId(station_name){
    
    
    const url = `${CORS_PROXY}`+ encodeURIComponent(`https://public-api.meteofrance.fr/public/DPObs/v1/liste-stations?apikey=${apikey}`);

    try{
        const myUrl= await fetch(url);
        console.log(myUrl);

        const textFile= await myUrl.text();
        const lines=textFile.split('\n');
        console.log(lines.length);
        console.log(lines[0]);

        let stationMap = {};
        for(let line of lines){
            const parts=line.split(';');
            if(parts[2]==station_name){
                stationMap[parts[2]]=parts[0];
                return parts[0];
            }
            
        }
        return stationMap[station_name] || "Station id not found";
        
    }catch(error){
        console.error("Error when retrieving station id for the station name entered:", error);
    }
}




async function getWeather(station_id, data_holder){
    const url = `${CORS_PROXY}`+ encodeURIComponent(`https://public-api.meteofrance.fr/public/DPObs/v1/station/horaire/?id_station=${station_id}&apikey=${apikey}&format=json`);


    try{
        const myUrl = await fetch(url);
        const weatherData = await myUrl.json();
        console.log(Object.keys(weatherData[0]));
        
        contents=`station_name : ${stationName},
                temp: ${Math.round(weatherData[0].t-273.15)},
                wind_speed : ${weatherData[0].ff},
                precipitation : ${weatherData[0].rr1},`;
        data_holder.innerHTML = contents;
        //alert(contents);
                
            
    }catch(error){
        console.error("Error when retrieving weather data:", error);
    }

}

async function main(data_holder) {
    const station_id = await getStationId(stationName);
    console.log("Station ID:", station_id);

    if (station_id !== "Station id not found") {
        const weatherData = await getWeather(station_id, data_holder);
        console.log("Weather Data:", weatherData);
    } else {
        console.log("Weather Data not available");
    }
}

main();
