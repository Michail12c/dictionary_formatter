export class SubtitleService {
  loadYouTubeSubtitles() {
        let url = "https://video.google.com/timedtext?lang=en&v=CwUTLYIDZUY&type=track"; 
        let response = fetch(url, {
            method: 'GET'
        })
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => console.log("data", data)); 

       
    }
}

