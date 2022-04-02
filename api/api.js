import axios from "axios";

const call = async (method, url, data=null, onSuccess= () => {}, onFinally= () => {}, onError) => {
    const options = {
        method: method,
        url: `${process.env.NEXT_PUBLIC_SERVER_URL}${url}`,
    }
    if (data) {
        options.body = data;
    }

    try {
        const res = await axios(options)
        onSuccess(res.data)
        return res.data

    } catch(err) {

    } finally {
        onFinally();
    }

    // .then(response => {
    //     if ( response.status >= 400 ) {
    //         if ( onError ) {
    //             response.json().then(json => {
    //                 onError( json );
    //             });
    //         }

    //         else {
    //             throw new Error("Bad response from server", response);
    //         }
    //     }
    //     return response.json();
    // })
    // .then(response => {
    //     onSuccess(response);
    //     console.log('response',response);
    // })
    // .catch(err => {})
    // .finally(_ => onFinally());
}

export const get = async(url, onSuccess, onFinally, onError) => {
    return await call("GET", url, null, onSuccess, onFinally, onError);
}

export const post = async(url, data, onSuccess, onFinally, onError) => {
    return await call("POST", url, data, onSuccess, onFinally, onError);
}

export const put = async(url, data, onSuccess, onFinally, onError) => {
    return await call("PUT", url, data, onSuccess, onFinally, onError);
}

// const upload = async (img, onSuccess, onError) => {
//     let headers = {
//         "Content-Type": "application/json; charset=utf-8",
//     };

//     headers = await getAccessToken(headers);

//     fetch(`${process.env.SERVER}/upload`, {
//         method: "POST",
//         headers: headers,
//         body: JSON.stringify( { base64: `data:image/jpeg;base64,${img}` } )
//     })
//     .then(response => {
//         if ( response.status >= 400 ) {
//             if ( onError ) {
//                 response.json().then(json => {
//                     onError( json );
//                 });
//             } else {
//                 throw new Error("Bad response from server ", JSON.stringify(response));
//             }
//         }
//         return response.json();
//     })
//     .then(response => {
//         console.log('[INFO] response', response);
//         onSuccess(response);
//     })
//     .catch(err => {})
// }