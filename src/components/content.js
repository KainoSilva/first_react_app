import React, { Component } from 'react'
import miata from '../miata.jpg';

export default class content extends Component {
  render() {
    return (
      <div className="content">
        <img src={miata} className="miata" alt="miata" />
        <div className="text">
          <p>The Mazda MX-5 (NA) (sold in Japan as the Eunos Roadster (ユーノス・ロードスター, Yūnosu Rōdosutā)
            and in North America as the Mazda MX-5 Miata) is the first generation of the Mazda MX-5 manufactured
            from 1989 to 1997. Inspired by the post-war era British sports cars, the MX-5 rejuvenated interest in
            roadsters after the demise of cars such as the MG B and Triumph Spitfire. Since its debut, the MX-5 has
            won numerous automotive awards and has become the world's best selling sports car.</p>

          <p>The MX-5 was unveiled at the Chicago Auto Show on February 10, 1989, with a price tag of US$14,000
            (equivalent to $33,051 in 2022). The MX-5, with production code NA, was made available for delivery
            to buyers worldwide in the following dates: May 1989 (as a 1990 model) in the US and Canada; September 1,
            1989 in Japan; and 1990 in Europe. An optional hardtop was made available at the same time, in sheet moulding
            compound (SMC). Demand initially outstripped production, fueled by enthusiastic press reviews.</p>

          <p>In Japan, the car was not badged as a Mazda, as the company was in the process of launching different
            marques for deluxe models, similar to Nissan's Infiniti, Honda's Acura and Toyota's Lexus. Instead, the
            Mazda MX-5 was sold as the Eunos Roadster, and was joined by the MX-3/AZ-3/Eunos Presso
            (based on Japanese Mazda dealerships). The exterior dimensions and the engine displacement were also in
            compliance with Japanese Government compact car regulation.</p>
        </div>
      </div>
    )
  }
}
