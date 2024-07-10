import React from "react";
import "./HrdMain.css";
import hdrImg from "./../../../vid&img/images-hrd.jpg"
const HrdMain = () => {
  return (
    <div className="hrdMainContainer">
      <div className="hrdMainContentWrapper">
        <div className="hrdMainContent" id="hrdMainContent1">
          <img
            src={hdrImg}
            alt=""
          />
        </div>
        <div className="hrdMainContent" id="hrdMainContent2">
          <h3>COMMERCIAL DOCUMENTS:</h3>
          <p>
            With the onset of globalization and increased outflow of Indian
            migrants, the HRD ministry of New Delhi delegated this
            responsibility to the respective Home Departments of each state.
            Hence HRD attestation from New Delhi is no longer required but
            instead Home Departments Attestation is required but the name still
            remains. In case of UAE and Oman; state Home Department Attestation
            is not necessary but in case of Saudi Arabia, it is compulsory where
            the HRD Ministry in New Delhi delegated this responsibility to the
            respective Home Departments of each state, an exception was made in
            the case of two states namely Kerala and Karnataka. In both these
            states the concerned Home Department created a special department
            called as Regional Authentication Centers or RAC. The RAC of Kerala
            is called as NORKA Roots.
          </p>
          <p>
            The procedure and time frame for Home Department Attestation / HRD
            Atestation varies from state to state for e.g. Documents originating
            from Tamil Nadu go to the university for verification and depending
            upon the university and age of the certificate time frames may vary.
            In case of Kerala, usually the documents are attested and returned
            on the same day. In some cases even the money (to be paid as a DD)
            will vary again depending upon the age of the Document and the
            university. For e.g. Maharashtra.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HrdMain;
