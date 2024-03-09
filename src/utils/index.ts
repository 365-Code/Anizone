const urls = [
    {
        url: 
          'https://www034.vipanicdn.net/streamhls/7244984011002ee29dc294666636b688/ep.1.1709545502.360.m3u8',
        isM3U8: true,
        quality: '360p'
      },
      {
        url: 
          'https://www034.vipanicdn.net/streamhls/7244984011002ee29dc294666636b688/ep.1.1709545502.480.m3u8',
        isM3U8: true,
        quality: '480p'
      },
      {
        url: 
          'https://www034.vipanicdn.net/streamhls/7244984011002ee29dc294666636b688/ep.1.1709545502.720.m3u8',
        isM3U8: true,
        quality: '720p'
      },
      {
        url: 
          'https://www034.vipanicdn.net/streamhls/7244984011002ee29dc294666636b688/ep.1.1709545502.1080.m3u8',
        isM3U8: true,
        quality: '1080p'
      },
      {
        url: 
          'https://www034.vipanicdn.net/streamhls/7244984011002ee29dc294666636b688/ep.1.1709545502.m3u8',
        isM3U8: true,
        quality: 'default'
      },
      {
        url: 
          'https://www034.anicdnstream.info/videos/hls/tW-4RhExcA2l9MC5FB3D3g/1709934012/150231/7244984011002ee29dc294666636b688/ep.1.1709545502.m3u8',
        isM3U8: true,
        quality: 'backup'
      }
    ]


export type fetchAnimeInfoType = {
  id: string,
  image: string,
  title: string,
  genres: string[],
  status: string,
  rating: number,
  type: string,
  startDate: { year: number, month: number, day: number },
  season: string,
  studios: string[]
}