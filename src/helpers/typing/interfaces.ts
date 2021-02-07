
export interface ExportedMetaData {
    readonly contentTitle: {
        genericContext: string,
        blogContext: string,
        portfolioContext: string,
      },
      readonly urlSite: URL,
      readonly aboutSite: string,
      readonly tagline: string,
      readonly userInfo: {
        ownerName: string,
        githubInfo: URL,
        siteVersion: string // * SemVer as Interface does not exist, unfortunately.
      }
}

export interface EnsuredMetaDataHeader {
    title: string,
    tagline: string,
    description: string,
    aboutTheSite: string,
    userInfo: string,
    url: URL
}
