const defaultResponse = {
    data: null,
    status: 500,
};

class Request {
    static async get(url) {
        let response = null;
        try {          
          const token = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjgzMTVhMGNlOGViY2Y5ZmJmYTBmNjFiZGE5ODI1MSIsInN1YiI6IjVmZTQ1Zjc4MWQ2YzVmMDAzZGRiM2ZjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l5SABHULwTmw2dYDN1Fs5ruc9OSajLZCtXZnzdNiycQ`;
          response = await fetch(url, {
              method: 'GET',
              headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                  Authorization: token,
              },
          }).then((answer) => answer.json());
        } catch (error) {
            response = defaultResponse;
            console.log("error",response)
        }

        return response;
    }
}

export default Request;
    