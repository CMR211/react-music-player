import React from "react"
import axios from "axios"

type tObject = {
    url: string
    token: string
    setter: (arg0: object) => void
    params: object
    settedData: string
}

/**
 * Fetches data from spotify API
 * @param object: {
 * url: string ,
 * token: string,
 * setter: function,
 * params: {}
 * settedData: string
 * }
 * @returns data object
 */
export default function useSpotifyFetch(object: tObject) {
    return async () => {
        const { data } = await axios.get(object.url, {
            headers: {
                Authorization: `Bearer ${object.token}`,
            },
            params: object.params,
        })
        return data
    }
}
