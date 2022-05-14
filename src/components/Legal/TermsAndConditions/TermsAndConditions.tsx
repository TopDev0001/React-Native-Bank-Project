import React from 'react';
import './terms-and-conditions.sass';
import FormatHelper from '../../../utils/FormatHelper';

import Document from '../Document/Document';
import { ITermsAndConditions } from './types';

const TermsAndConditions: React.FC<ITermsAndConditions> = () => {
  const date = FormatHelper.dateFormatExtended(new Date());
  return (
    <Document>
      <header>
        <h1 className="terms">Terms of use </h1>
        <p className="document-updated-date">
          Last Revised:
          {date}
        </p>
      </header>
      <section>
        <p>
          NimbleFi is owned and operated by SwitchTech LLC (“SwitchTech,” “we,” “our,” or “us”). NimbleFi is a checking
          account onboarding platform.
          {' '}
        </p>
        <p>
          THESE TERMS OF USE (“TERMS”) CONSTITUTE A BINDING AGREEMENT BETWEEN YOU AND US. PLEASE READ CAREFULLY THROUGH
          ALL SECTIONS OF THESE TERMS. YOUR ACCESS TO AND USE OF NIMBLEFI IS SUBJECT TO THESE TERMS AND ALL APPLICABLE
          LAWS AND WE RESERVE THE RIGHT TO TERMINATE YOUR ACCESS TO NIMBLEFI IF YOU VIOLATE THESE TERMS. IF YOU DO NOT
          AGREE WITH THESE TERMS, DO NOT ACCESS OR OTHERWISE USE NIMBLEFI.
        </p>
        <p>
          We may make changes to the content available on NimbleFi at any time. We can change, update, add, or remove
          provisions of these Terms at any time by posting the updated Terms on NimbleFi. By using NimbleFi after we
          have updated the Terms, you are agreeing to the then-current Terms. However, we will not amend the arbitration
          provision without giving you notice and an opportunity to opt out of such provision. In addition to these
          Terms, your use of NimbleFi may be governed by additional agreements.
        </p>
      </section>
      <section>
        <h4>MANDATORY ARBITRATION NOTICE AND CLASS ACTION AND JURY TRIAL WAIVER.</h4>
        <p>
          These Terms contain a mandatory (binding) arbitration provision and class action and jury trial waiver clauses
          (see below). Except for certain types of disputes described in the arbitration section below or where
          prohibited by applicable law:
        </p>
        <ul>
          <li>
            <b>
              Disputes between you and us will be resolved by binding, individual arbitration and you waive your right
              to participate in a class action lawsuit or class-wide arbitration.
            </b>
          </li>
          <li>Your rights will be determined by a NEUTRAL ARBITRATOR and NOT a judge or jury.</li>
          <li>
            You will be entitled to a FAIR HEARING, BUT the arbitration procedures are SIMPLER AND MORE LIMITED THAN
            RULES APPLICABLE IN COURT.
          </li>
          <li>
            Arbitrator decisions are as enforceable as any court order and are subject to VERY LIMITED REVIEW BY A
            COURT.
          </li>
        </ul>
        <p>In addition to these Terms, your use of NimbleFi may be governed by additional agreements.</p>
        <p>
          Although not part of these Terms, to learn more about how we use and protect the privacy of users of NimbleFi,
          please visit our
          {' '}
          <a target="_blank" rel="noopener noreferrer" href="/centralbankonline.com/onboarding/privacy-policy">
            privacy policy page.
          </a>
        </p>
      </section>
      <section>
        <h4>Accessing NimbleFi</h4>
        <p>
          We reserve the right to withdraw or amend NimbleFi, and any Materials (defined below) we provide on NimbleFi,
          in our sole discretion without notice. We will not be liable if, for any reason, all or any part of NimbleFi
          is unavailable at any time or for any period. From time to time, in our sole discretion and without notice, we
          may restrict access to all or some parts of NimbleFi to users, including registered users.
        </p>
        <p>You are responsible for both:</p>
        <ul>
          <li>Making all arrangements necessary for you to have access to NimbleFi.</li>
          <li>
            Ensuring that all persons who access NimbleFi through your internet connection are aware of these Terms and
            comply with them.
          </li>
        </ul>
        <p>
          To access and use NimbleFi, you may be asked to provide certain registration details or other information. It
          is a condition of your use of NimbleFi that all the information you provide on NimbleFi is correct, current,
          and complete, and that you have the authority to provide such information to us.
        </p>
        <p>
          If you choose, or are provided with, a user name, password, or any other piece of information as part of our
          security procedures, you must treat such information as confidential, and you must not disclose it to any
          other person or entity. You also acknowledge that your account is personal to you and agree not to provide any
          other person with access to NimbleFi or portions of it using your username, password, or other security
          information. You agree to notify us immediately of any unauthorized access to or use of your username or
          password or any other breach of security. You also agree to ensure that you exit from your account at the end
          of each session. You should use particular caution when accessing your account from a public or shared
          computer so that others are not able to view or record your password or other personal information.
        </p>
        <p>
          We have the right to disable any username, password, or other identifier, whether chosen by you or provided by
          us, at any time in our sole discretion for any reason, including if, in our opinion, you have violated any
          provision of these Terms.
        </p>
      </section>
      <section>
        <h4>Proprietary Rights and Your Use of NimbleFi</h4>
        <p>
          Unless otherwise specified in these Terms, all information and screens appearing on NimbleFi are the sole
          property of SwitchTech, our affiliates, or other parties. We provide content through NimbleFi that is
          copyrighted and/or trademarked work of SwitchTech or our third-party licensors and suppliers (collectively,
          the “Materials”). Materials may include documents, services, software, site design, text, graphics, logos,
          video, images, icons, and other content, as well as the arrangement thereof.
        </p>
        <p>
          Subject to these Terms, we hereby grant you a limited, personal, non-exclusive and non-transferable license to
          use, view, print, display and download the Materials for the sole purpose of viewing them on a stand-alone
          personal computer or mobile device and to use NimbleFi solely for your personal use. Except for the foregoing
          license and as otherwise required or limited by applicable law, you have no other rights in NimbleFi or any
          Materials and you may not modify, edit, copy, reproduce, create derivative works of, reverse engineer, alter,
          enhance or in any way exploit any of NimbleFi or Materials in any manner or for any purpose that would
          constitute infringement of our, our licensors’, or NimbleFi’s other user’s intellectual property rights. All
          rights not expressly granted herein are reserved.
        </p>
        <p>
          If you breach any of these Terms, the above license will terminate automatically and you must immediately
          destroy any downloaded or printed Materials.
        </p>
      </section>
      <section>
        <h4>Your Communications to Us</h4>
        <p>
          By forwarding any content or communications to us through NimbleFi or by other electronic means, you thereby
          grant us a perpetual, royalty-free, world-wide, irrevocable, nonexclusive license to use, reproduce, modify,
          adapt, publish, translate, create derivative works from, redistribute, and display such content and
          communications in any form for the purposes of submitting your checking account application to your banking
          institution and any purpose tangentially related to providing such service. No compensation will be paid to
          you with respect to our or our sublicensees’ use of your communications. By providing or submitting content,
          you represent and warrant that you own or otherwise control all of the rights to your submitted content and
          communications as described in this section including, without limitation, all the rights necessary for you to
          submit the content and communications and grant the license above.
        </p>
      </section>
      <section>
        <h4>Electronic Communications</h4>
        <p>
          By using NimbleFi, you consent to receiving electronic communications, including electronic notices, from us.
          These electronic communications may include notices about applicable fees and charges, transactional
          information and other information concerning or related to NimbleFi and/or Materials. These electronic
          communications are part of your relationship with us. If you sign the Electronic Record and Signature
          Disclosure, you agree that any notices, agreements, disclosures or other communications that we send you
          electronically will satisfy any legal communication requirements, including that such communications be in
          writing.
        </p>
      </section>
      <section>
        <h4>Permitted Uses</h4>
        <p>By accessing or using NimbleFi, you agree that:</p>
        <ul>
          <li>Your use of NimbleFi is subject to and governed by these Terms;</li>
          <li>You will only access or use NimbleFi and transact business with us if you are at least 18 years old;</li>
          <li>You will use NimbleFi solely for its services offered in the normal course of business;</li>
          <li>You will always act in accordance with the law, custom, and in good faith;</li>
          <li>
            You will comply with and be bound by these Terms as they appear on NimbleFi each time you access and use
            NimbleFi;
          </li>
          <li>Each use of NimbleFi by you indicates and confirms your agreement to be bound by these Terms; and</li>
          <li>These Terms are a legally binding agreement between you and us that will be enforceable against you.</li>
        </ul>
        <p>You further agree to not use NimbleFi in any way that:</p>
        <ul>
          <li>Changes or alters NimbleFi or content or services that may appear on NimbleFi;</li>
          <li>Impairs in any way the integrity or operation of NimbleFi;</li>
          <li>
            Interferes with or induces a breach of the contractual relationships between us and our employees or
            business partners;
          </li>
          <li>Is in any way unlawful or prohibited, or that is harmful or destructive to anyone or their property;</li>
          <li>
            Transmits any advertisements, solicitations, schemes, spam, flooding, or other unsolicited email and
            commercial communications;
          </li>
          <li>
            Transmits any advertisements, solicitations, schemes, spam, flooding, or other unsolicited email and
            commercial communications;
          </li>
          <li>Transmits any harmful or disabling computer codes or viruses;</li>
          <li>Harvests email addresses from NimbleFi;</li>
          <li>
            Transmits unsolicited email to NimbleFi or to anyone whose email address includes the domain name of
            NimbleFi;
          </li>
          <li>Interferes with our network services;</li>
          <li>Attempts to gain unauthorized access to our network services;</li>
          <li>
            Suggests an express or implied affiliation or relationship with us without our express written permission;
          </li>
          <li>
            Impairs or limits our ability to operate NimbleFi or any other person’s ability to access and use NimbleFi;
          </li>
          <li>Unlawfully impersonates or otherwise misrepresents your affiliation with any person or entity;</li>
          <li>
            Transmits or uploads violent, obscene, sexually explicit, discriminatory, hateful, threatening, abusive,
            defamatory, offensive, harassing, or otherwise objectionable content or images;
          </li>
          <li>Dilutes or depreciates our or any of our affiliates’ or business partners’ names and reputations;</li>
          <li>
            Transmits or uploads content or images that infringe upon any third party’s intellectual property rights or
            right to privacy; or
          </li>
          <li>Unlawfully transmits or uploads any confidential, proprietary or trade secret information.</li>
        </ul>
        <p>
          This list of prohibited activities provides examples and is not complete or exclusive. We reserve the right to
          terminate access to your account and your ability to use NimbleFi (or the Materials) with or without cause and
          with or without notice, for any reason or no reason, or for any action that we determine is inappropriate or
          disruptive to NimbleFi or to any other user of NimbleFi and/or Materials. We may report to law enforcement
          authorities any actions that may be illegal, and any reports it receives of such conduct. When legally
          required or at our discretion, we will cooperate with law enforcement agencies in any investigation of alleged
          illegal activity on NimbleFi or on the Internet.
        </p>
      </section>
      <section>
        <h4>Reliance on Information Posted</h4>
        <p>
          The information presented on or through NimbleFi is made available solely for general information purposes.
          The information provided does not constitute legal or accounting advice or counsel. We do not warrant the
          accuracy, completeness, or usefulness of this information. Any reliance you place on such information is
          strictly at your own risk. We disclaim all liability and responsibility arising from any reliance placed on
          such materials by you or any other visitor to NimbleFi, or by anyone who may be informed of any of its
          contents.
        </p>
        <p>
          NimbleFi may include content provided by third parties, including materials provided by third-party licensors,
          syndicators, aggregators, and/or reporting services. All statements and/or opinions expressed in these
          materials, and all articles and responses to questions and other content, other than the content provided by
          us, are solely the opinions and the responsibility of the person or entity providing those materials. These
          materials do not necessarily reflect the opinion of SwitchTech. We are not responsible, or liable to you or
          any third party, for the content or accuracy of any materials provided by any third parties.
        </p>
      </section>
      <section>
        <h4>Third-Party Links</h4>
        <p>
          NimbleFi may link to other websites that are not sites controlled or operated by us (collectively,
          “Third-Party Sites”). Certain areas of NimbleFi may allow you to interact and/or conduct transactions with
          such Third-Party Sites, and, in certain situations, you may be transferred to a Third-Party Site through a
          link but it may appear that you are still on NimbleFi. In any case, you acknowledge and agree that the
          Third-Party Sites may have different privacy policies and terms and conditions and/or user guides and business
          practices than SwitchTech, and you further acknowledge and agree that your use of such Third-Party Sites is
          governed by the respective Third-Party Site’s privacy policy and terms and conditions and/or user guides. We
          provide links to the Third-Party Sites to you as a convenience, and we do not verify, make any representations
          or take responsibility for such Third-Party Sites, including, without limitation, the truthfulness, accuracy,
          quality or completeness of the content, services, links displayed and/or any other activities conducted on or
          through such Third-Party Sites. YOU AGREE THAT WE WILL NOT, UNDER ANY CIRCUMSTANCES, BE RESPONSIBLE OR LIABLE,
          DIRECTLY OR INDIRECTLY, FOR ANY GOODS, SERVICES, INFORMATION, RESOURCES AND/OR CONTENT AVAILABLE ON OR THROUGH
          ANY THIRD-PARTY SITES AND/OR THIRD-PARTY DEALINGS OR COMMUNICATIONS, OR FOR ANY HARM RELATED THERETO, OR FOR
          ANY DAMAGES OR LOSS CAUSED OR ALLEGED TO BE CAUSED BY OR IN CONNECTION WITH YOUR USE OR RELIANCE ON THE
          CONTENT OR BUSINESS PRACTICES OF ANY THIRD PARTY. Any reference on NimbleFi to any product, service,
          publication, institution, organization of any third-party entity or individual does not constitute or imply
          our endorsement or recommendation.
        </p>
      </section>
      <section>
        <h4>Federal and State Laws</h4>
        <p>
          NimbleFi is operated from the United States and is intended for U.S. residents only. NimbleFi is not approved
          for distribution outside of the U.S. and non-U.S. residents should not rely or act upon the information
          contained within. When using NimbleFi, or when using any content provided by us, you must obey all applicable
          U.S. federal, state and local laws.
        </p>
      </section>
      <section>
        <h4>Minimum Age</h4>
        <p>
          We do not allow persons under the age of eighteen (18) to use NimbleFi. By using NimbleFi, you represent and
          warrant that you are eighteen (18) years of age or over.
        </p>
      </section>
      <section>
        <h4>Disclaimer of Warranties</h4>
        <p>
          Your use of NimbleFi is at your own risk. The Materials have not been verified or authenticated in whole or in
          part by us, and they may include inaccuracies or typographical or other errors. We do not warrant the accuracy
          or timeliness of the Materials contained on NimbleFi. We have no liability for any errors or omissions in the
          Materials, whether provided by us, our licensors or suppliers or other users.
        </p>
        <p>
          TO THE FULLEST EXTENT PROVIDED BY LAW AND EXCEPT AS OTHERWISE PROVIDED HEREIN OR ON NIMBLEFI, THE INFORMATION
          AND SERVICES OFFERED ON OR THROUGH NIMBLEFI AND ANY REFERENCED THIRD-PARTY SITE ARE PROVIDED “AS IS” AND
          WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. ANY THIRD-PARTY GOODS OR SERVICE PROVIDERS ARE
          SUPPLIED AS A CONVENIENCE TO YOU AND DOES NOT CONSTITUTE SPONSORSHIP, AFFILIATION, PARTNERSHIP, OR
          ENDORSEMENT. TO THE FULLEST EXTENT ALLOWED BY LAW, WE DISCLAIM ALL EXPRESS AND IMPLIED WARRANTIES, INCLUDING
          BUT NOT LIMITED TO THE IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND
          NON-INFRINGEMENT.
        </p>
        <p>
          TO THE FULLEST EXTENT ALLOWED BY LAW, WE DO NOT WARRANT OR MAKE ANY REPRESENTATIONS REGARDING THE USE OR THE
          RESULTS OF THE USE OF NIMBLEFI, CONTENT, OR OTHER POSTED MATERIALS ON NIMBLEFI IN TERMS OF ITS CORRECTNESS,
          ACCURACY, TIMELINESS, RELIABILITY OR OTHERWISE.
        </p>
        <p>
          BY PROVIDING THE SERVICES ON NIMBLEFI, WE DO NOT IN ANY WAY PROMISE THAT THE SERVICES WILL REMAIN AVAILABLE TO
          YOU. WE ARE ENTITLED TO TERMINATE ALL OR PART OF ANY OF NIMBLEFI AT ANY TIME, IN OUR SOLE DISCRETION WITHOUT
          NOTICE TO YOU.
        </p>
      </section>
      <section>
        <h4>Limitation of Liability</h4>
        <p>
          WE CANNOT GUARANTEE NIMBLEFI WILL BE AVAILABLE 100% OF THE TIME BECAUSE PUBLIC NETWORKS, SUCH AS THE INTERNET,
          OCCASIONALLY EXPERIENCE DISRUPTIONS. ALTHOUGH WE STRIVE TO PROVIDE THE MOST RELIABLE WEBSITE REASONABLY
          POSSIBLE, INTERRUPTIONS AND DELAYS IN ACCESSING NIMBLEFI ARE UNAVOIDABLE AND WE DISCLAIM ANY LIABILITY FOR
          DAMAGES RESULTING FROM SUCH PROBLEMS.
        </p>
        <p>
          NOTWITHSTANDING THE FOREGOING, THE LIABILITY OF SWITCHTECH AND ITS AFFILIATES, EMPLOYEES, AGENTS,
          REPRESENTATIVES, THIRD-PARTY SERVICE PROVIDERS, AND BUSINESS PARTNERS, WITH RESPECT TO ANY AND ALL CLAIMS
          ARISING OUT OF YOUR USE OF NIMBLEFI, THE MATERIALS, THE CONTENT OR SERVICES OBTAINED THROUGH NIMBLEFI, WHETHER
          BASED ON WARRANTY, CONTRACT, NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, SHALL NOT EXCEED, IN THE AGGREGATE,
          ONE HUNDRED DOLLARS ($100).
        </p>
        <p>
          IN NO EVENT WILL WE BE LIABLE TO YOU OR ANY PARTY FOR ANY DIRECT, INDIRECT, SPECIAL OR OTHER CONSEQUENTIAL
          DAMAGES FOR ANY USE OF NIMBLEFI, OR ON ANY OTHER HYPERLINKED WEBSITE, INCLUDING, WITHOUT LIMITATION, ANY LOST
          PROFITS, BUSINESS INTERRUPTION, LOSS OF PROGRAMS OR OTHER DATA OR OTHERWISE, EVEN IF WE ARE EXPRESSLY ADVISED
          OF THE POSSIBILITY OF SUCH DAMAGES.
        </p>
      </section>
      <section>
        <h4>Indemnification</h4>
        <p>
          You agree to indemnify, defend and hold harmless us and our affiliates, employees, agents, representatives
          third-party service providers, and business partners for any and all claims, demands, actions, liability,
          fines, penalties and expenses that may arise from any of your acts through the use of NimbleFi. Such acts may
          include but are not limited to providing content to or communicating with us or our affiliates, unauthorized
          use of material obtained through NimbleFi, engaging in a prohibited activity, or any other action that
          breaches these Terms.
        </p>
      </section>
      <section>
        <h4>Copyright Complaints</h4>
        <p>
          We respect the intellectual property of others. If you believe that your work has been copied in a way that
          constitutes copyright infringement, please provide our copyright agent with the following information.
        </p>
        <ul>
          <li>
            An electronic or physical signature of the person authorized to act on behalf of the owner of the copyright
            interest;
          </li>
          <li>Description of the copyrighted work that you claim has been infringed;</li>
          <li>The location on NimbleFi of the material that you claim is infringing;</li>
          <li>Your address, telephone number and e-mail address;</li>
          <li>A statement that your claim of infringement is based on a good faith belief; and</li>
          <li>
            A statement made under penalty of perjury that the information you have provided is accurate and that you
            are the copyright owner or authorized to act on the copyright owner’s behalf.
          </li>
        </ul>
        <p>
          Our agent for notice of claims of copyright infringement on NimbleFi can be reached as follows:
          <br />
          <a href="mailto:support@nimblefi.com">support@nimblefi.com</a>
        </p>
      </section>
      <section>
        <h4>MANDATORY ARBITRATION AGREEMENT AND CLASS ACTION AND JURY TRIAL WAIVER (“Arbitration Agreement”).</h4>
        <p>
          You hereby agree that either you or we may require any dispute, claim, or cause of action (“Claim”) between
          you and us or any third parties arising out of use of NimbleFi and any other actions with us (whether based in
          contract, tort, statute, fraud, misrepresentation, or any other legal theory) to be arbitrated on an
          individual (non-class) basis. However, both parties retain the right to seek relief in a small claims court
          (or a state court equivalent) for a Claim within the scope of its jurisdiction so long as the small claims
          action does not seek to certify a class, combine the claims of multiple persons, recover damages in excess of
          the limit for a small claim under applicable state law or is not transferred, removed, or appealed from small
          claims court to any different court. Additionally, if you are a resident of California, you retain the right
          to obtain public injunctive relief from any court with proper jurisdiction.
        </p>
      </section>
      <section>
        <h4>
          CLASS ACTION WAIVER/JURY TRIAL WAIVER. THERE IS NO JUDGE OR JURY IN ARBITRATION, AND COURT REVIEW OF AN
          ARBITRATION AWARD IS VERY LIMITED. ADDITIONALLY, ANY ARBITRATION OF A CLAIM WILL BE ON AN INDIVIDUAL BASIS,
          AND, THEREFORE, YOU UNDERSTAND AND AGREE THAT YOU ARE WAIVING THE RIGHT TO PARTICIPATE AS A CLASS
          REPRESENTATIVE OR CLASS MEMBER IN A CLASS ACTION LAWSUIT. AS PART OF THIS WAIVER, YOU AGREE THAT YOU WAIVE THE
          RIGHT TO ACT AS A PRIVATE ATTORNEY GENERAL IN AN ARBITRATION; THAT EXCEPT AS OTHERWISE PROVIDED IN THIS
          ARBITRATION AGREEMENT, CLAIMS BROUGHT BY OR AGAINST YOU MAY NOT BE JOINED OR CONSOLIDATED WITH CLAIMS BROUGHT
          BY OR AGAINST ANY OTHER PERSON; AND THE ARBITRATOR SHALL HAVE NO AUTHORITY TO CONDUCT A CLASS-WIDE
          ARBITRATION, PRIVATE ATTORNEY GENERAL ARBITRATION OR MULTIPLE-PARTY ARBITRATION.
        </h4>
        <p>
          Either you or we may elect to resolve a particular Claim through arbitration, even if the other party has
          already initiated litigation in court related to the Claim, by: (a) making written demand for arbitration upon
          the other party, (b) initiating arbitration against the other party, or (c) filing a motion to compel
          arbitration in court.
        </p>
        <p>
          You and we agree that your use of NimbleFi involves interstate commerce, and that this arbitration agreement
          shall be interpreted and enforced in accordance with the Federal Arbitration Act (FAA) set forth in Title 9 of
          the U.S. Code to the fullest extent possible, notwithstanding any state law to the contrary, regardless of the
          origin or nature of the Claims at issue. The arbitrator must follow, to the extent applicable: (1) the
          substantive law of the state in which we entered into the transaction giving rise to this arbitration
          agreement; (2) the applicable statutes of limitations; and (3) claims of privilege recognized at law. The
          arbitrator will not be bound by federal, state or local rules of procedure and evidence or by state or local
          laws concerning arbitration proceedings.
        </p>
        <p>
          If either you or we elect to arbitrate a Claim, the dispute shall be resolved by binding arbitration
          administered under the applicable rules of the American Arbitration Association (“AAA”). If this is a
          consumer-purpose transaction, the applicable rules will be the AAA’s Consumer Arbitration Rules. The
          applicable AAA rules and other information about arbitrating a claim under AAA, including fees and costs and
          how to submit a dispute to arbitration, may be obtained by visiting its website at
          {' '}
          <a target="_blank" rel="noopener noreferrer" href="https://www.adr.org/">
            https://www.adr.org/
          </a>
          or by calling 1-800-778-7879. If AAA will not serve as the administrator of the arbitration, and you and we
          cannot then agree upon a substitute arbitrator, you and we shall request that a court with proper jurisdiction
          appoint an arbitrator. However, we will abide by the applicable AAA rules regardless of the forum. Arbitration
          shall be conducted in the county and state where you accepted these Terms, you reside, or another reasonably
          convenient place to you as determined by the arbitrator, unless applicable laws require another location.
          Judgment on the award rendered by the arbitrator may be entered in any court having jurisdiction thereof.
          Except as provided in applicable statutes, the arbitrator’s award is not subject to review by the court and it
          cannot be appealed. The parties will have the option to request and receive a statement of reasons for the
          arbitration award.
        </p>
        <p>
          If you elect to file the arbitration and this is a consumer-purpose transaction, you will pay the filing fee
          to the extent required by AAA’s Consumer Arbitration Rules but not to exceed the cost of filing a lawsuit. Any
          amount above what it would cost you to file a lawsuit, we will pay. Further, we will consider any request by
          you to reimburse you for any amount of filing fees you pay. All other arbitration fees and expenses shall be
          allocated to us according to AAA rules. Except for the arbitration fees and expenses, each party shall pay its
          own costs and fees incurred (including attorneys’ fees), unless the arbitrator allocates them differently in
          accordance with applicable law. This paragraph applies only if this is a consumer-purpose transaction.
        </p>
        <p>
          If any part of this arbitration provision is invalid, all other parts of it remain valid. However, if the
          class action limitation is invalid, then this arbitration provision is invalid in its entirety, provided that
          the remaining Terms shall remain in full force and effect. This arbitration provision will survive the
          termination of your use of NimbleFi and any other actions with us.
        </p>
        <p>
          <b>
            You may reject this arbitration provision within five days of accepting the Terms by emailing us at
            {' '}
            <a href="mailto:support@nimblefi.com">support@nimblefi.com</a>
            {' '}
            and including in the subject line “Rejection
            of Arbitration Provision.”
          </b>
        </p>
      </section>
      <section>
        <h4>Miscellaneous Provisions</h4>
        <p>
          <i>
            <b>Severability. </b>
          </i>
          If any term or provision in these Terms is found to be void, against public policy, or unenforceable by a
          court of competent jurisdiction and such finding or order becomes final with all appeals exhausted, then the
          offending provision shall be deemed modified to the extent necessary to make it valid and enforceable. If the
          offending provision cannot be so modified, then the same shall be deemed stricken from these Terms in its
          entirety and the remainder of these Terms shall survive with the said offending provision eliminated
        </p>
        <p>
          <i>
            <b>Governing Law and Venue. </b>
          </i>
          These Terms shall be governed by and construed in accordance with the laws of the State of Iowa, excluding its
          conflicts of law rules, and the United States of America. Without waiving the foregoing arbitration clause,
          you agree that any dispute arising from or relating to the subject matter of these Terms shall be governed by
          the exclusive jurisdiction and venue of the state and Federal courts of Des Moines, Iowa, except where the
          jurisdiction and venue are mandated by applicable Assignment. We may freely assign our obligations and rights
          under these Terms, including all Personal Information in our possession which we have collected during your
          use of NimbleFi.
        </p>
        <p>
          <i>
            <b>Headings. </b>
          </i>
          Condition and section headings are for convenience of reference only and shall not affect the interpretation
          of these Terms.
        </p>
        <p>
          <i>
            <b>Typographical Errors. </b>
          </i>
          Information on NimbleFi may contain technical inaccuracies or typographical errors. We attempt to make
          NimbleFi’s postings as accurate as possible, but we do not warrant the content of NimbleFi is accurate,
          complete, reliable, current, or error-free.
          {' '}
        </p>
      </section>
      <section>
        <h4>Questions</h4>
        <p>
          If you have any questions or comments about these Terms or NimbleFi, please contact us by email at
          {' '}
          <a href="mailto:support@nimblefi.com">support@nimblefi.com.</a>
        </p>
      </section>
    </Document>
  );
};
export default TermsAndConditions;
