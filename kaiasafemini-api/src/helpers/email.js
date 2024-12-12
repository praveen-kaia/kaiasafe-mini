const nodemailer = require('nodemailer');
let service = {};

let mailForm = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <!--<![endif]-->
    <!--[if (gte mso 9)|(IE)]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
    <!--[if (gte mso 9)|(IE)]>
      <style type="text/css">
        body {width: 480px;margin: 0 auto;}
        table {border-collapse: collapse;}
        table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
        img {-ms-interpolation-mode: bicubic;}
      </style>
    <![endif]-->
    <style type="text/css">
      @media only screen and (min-width: 320px){
        .content_heading {
          font-size: 16px !important;
        }
      }
      @media only screen and (min-width: 480px) {
        .content_heading {
          font-size: 18px !important;
        }
      }
      @media only screen and (min-width: 600px) {
        .content_heading {
			    font-size: 20px !important;
		    }
      }
      body, p, div {
		  font-family: inherit;
			font-size: 14px;
		  }
      body {
        color: #000000;
      }
      body a {
        color: #1188E6;
        text-decoration: none;
      }
      p { margin: 0; padding: 0; }
      table.wrapper {
        width:100% !important;
        table-layout: fixed;
        -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: 100%;
        -moz-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }
      img.max-width {
        max-width: 100% !important;
      }
      .column.of-2 {
        width: 50%;
      }
      .column.of-3 {
        width: 33.333%;
      }
      .column.of-4 {
        width: 25%;
      }
      ul ul ul ul  {
        list-style-type: disc !important;
      }
      ol ol {
        list-style-type: lower-roman !important;
      }
      ol ol ol {
        list-style-type: lower-latin !important;
      }
      ol ol ol ol {
        list-style-type: decimal !important;
      }
      @media screen and (max-width:480px) {
        .preheader .rightColumnContent,
        .footer .rightColumnContent {
          text-align: left !important;
        }
        .preheader .rightColumnContent div,
        .preheader .rightColumnContent span,
        .footer .rightColumnContent div,
        .footer .rightColumnContent span {
          text-align: left !important;
        }
        .preheader .rightColumnContent,
        .preheader .leftColumnContent {
          font-size: 80% !important;
          padding: 5px 0;
        }
        table.wrapper-mobile {
          width: 100% !important;
          table-layout: fixed;
        }
        img.max-width {
          height: auto !important;
          max-width: 100% !important;
        }
        a.bulletproof-button {
          display: block !important;
          width: auto !important;
          font-size: 80%;
          padding-left: 0 !important;
          padding-right: 0 !important;
        }
        .columns {
          width: 100% !important;
        }
        .column {
          display: block !important;
          width: 100% !important;
          padding-left: 0 !important;
          padding-right: 0 !important;
          margin-left: 0 !important;
          margin-right: 0 !important;
        }
        .social-icon-column {
          display: inline-block !important;
        }
      }
    </style>
      <!--user entered Head Start-->
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@600&display=swap");
      @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@300&display=swap");
    </style><!--End Head user entered-->
  </head>
  <body>
    <center class="wrapper" data-link-color="#1188E6" data-body-style="font-size:14px; font-family:inherit; color:#000000; background-color:#FFFFFF;">
      <div class="webkit">
        <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#FFFFFF">
          <tr>
            <td valign="top" bgcolor="#FFFFFF" width="100%">
              <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="100%">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td>
                          <!--[if mso]>
                            <center><table><tr><td width="480">
                          <![endif]-->
                          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:480px;" align="center">
                            <tr>
                              <td role="modules-container" style="padding:0px 0px 0px 0px; color:#000000; text-align:left;" bgcolor="#FFFFFF" width="100%" align="left">
                                <table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="04ec0443-6759-40e6-8432-6866bbad2b97.1">
                                  <tbody>
                                    <tr>
                                      <td style="font-size:6px; line-height:10px; padding:20px 0px 0px 20px;" valign="top" align="left">
                                        <a href="https://klaytn.foundation/">
                                          <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:20% !important; width:20%; height:auto !important;" width="96" alt="" data-proportionally-constrained="true" data-responsive="true" src="http://cdn.mcauto-images-production.sendgrid.net/16858d3083c9ea1f/5444a264-925c-45af-8d9d-8582276efdbc/400x112.png" />
                                        </a>
                                      </td>
                                   </tr>
                                 </tbody>
                               </table>
                               <table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="f2ac306c-3f0b-4ecb-bf94-d7c178c43ccd" data-mc-module-version="2019-10-22">
                                 <tbody>
                                   <tr>
                                     <td style="padding:52px 0px 18px 20px; line-height:36px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content">
                                       <div>
                                         <div style="font-family: inherit; text-align: inherit"><span class="content_heading" style="white-space: pre-wrap; font-size: 24px; font-family: Outfit, arial"><strong>You have successfully claimed your tokens</strong></span></div>
                                         <div></div>
                                       </div>
                                     </td>
                                   </tr>
                                 </tbody>
                               </table>
                               <table class="module" role="module" data-type="text" border="0"  cellpadding="0" cellspacing="0" width="100%" style="font: '10px', table-layout: fixed; background: #FCFCFC; border: 1px solid #E5DEDE; box-sizing: border-box; border-radius: 8px;" data-muid="56aad255-2cd3-446c-9867-2b3094f94ab3" data-mc-module-version="2019-10-22">
                                 <tbody>
                                   <tr>
                                     <td style="padding:18px 0px 18px 20px; line-height:21px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content">
                                       <div>
                                         <div style="font-family: Outfit, arial; text-align: inherit">Thank you for participating in Klaytn's [EVENT_NAME] Airdrop campaign!</div>
                                         <div style="font-family: Outfit, arial; text-align: inherit">We are pleased to inform you that <u>[EVENT_DYNAMIC_MESSAGE]</u> have been sent to your wallet.</div>
                                         <div style="font-family: Outfit, arial; text-align: inherit"><br/>
                                           If you wish to receive the latest news about Klaytn, including upcoming events and Airdrop campaigns, please
                                           <a href="https://mailchi.mp/klaytn/subscribe-to-mailing-list"><span style="color: #806060"><u>subscribe to our mailing list</u></span></a>.
                                           Don’t worry, we won’t spam you incessantly… only the good stuff!<br><br>
                                           Cheers,<br>Klaytn Foundation</div>
                                           <div></div>
                                       </div>
                                     </td>
                                   </tr>
                                 </tbody>
                               </table>
                               <table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="29e49174-3bcd-49b1-b871-5fbf0da3feb1">
                                 <tbody>
                                   <tr>
                                     <td style="padding:0px 0px 20px 0px;" role="module-content" bgcolor=""></td>
                                   </tr>
                                 </tbody>
                               </table>
                               <table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed;" width="100%" data-muid="0a954f79-6c70-4ae5-8b29-5812fc3d524b">
                                 <tbody>
                                   <tr>
                                     <td align="center" bgcolor="" class="outer-td" style="padding:0px 0px 0px 0px;">
                                       <table border="0" cellpadding="0" cellspacing="0" class="wrapper-mobile" style="text-align:center;">
                                         <tbody>
                                           <tr>
                                             <td align="center" bgcolor="#FF4400" class="inner-td" style="background:linear-gradient(90deg, #FF2F00 0%, #FF8C00 100%); border-radius:12px; font-size:16px; text-align:center; background-color:inherit; filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));">
                                               <a href="https://mailchi.mp/klaytn/subscribe-to-mailing-list" style="background-color:linear-gradient(90deg, #FF2F00 0%, #FF8C00 100%); border:0px solid #ff4400; border-color:#ff4400; border-radius:12px; border-width:0px; color:#ffffff; display:inline-block; font-size:14px; font-weight:700; letter-spacing:0px; line-height:normal; padding:12px 18px 12px 18px; text-align:center; text-decoration:none; border-style:solid; width:312px; font-family:Outfit, arial;" target="_blank">Subscribe to mailing list</a>
                                             </td>
                                           </tr>
                                         </tbody>
                                       </table>
                                     </td>
                                   </tr>
                                 </tbody>
                               </table>
                               <table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="5272d300-625f-4a66-b663-fd79b6a6f025">
                                 <tbody><tr><td style="padding:0px 0px 8px 0px;" role="module-content" bgcolor=""></td></tr></tbody>
                               </table>
                               <table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed;" width="100%" data-muid="c95a866e-28e9-405d-a60b-3517a88d4960">
                                <tbody>
                                  <tr>
                                    <td align="center" bgcolor="" class="outer-td" style="padding:0px 0px 0px 0px;">
                                      <table border="0" cellpadding="0" cellspacing="0" class="wrapper-mobile" style="text-align:center;">
                                        <tbody>
                                          <tr>
                                            <td align="center" bgcolor="#F6F4F4" class="inner-td" style="border-radius:6px; font-size:16px; text-align:center; background-color:inherit;">
                                              <a href="https://klaytn.foundation/" style="background-color:#F6F4F4; border:0px solid #333333; border-color:#333333; border-radius:12px; border-width:0px; color:#FF2F00; display:inline-block; font-size:14px; font-weight:bold; letter-spacing:0px; line-height:normal; padding:12px 18px 12px 18px; text-align:center; text-decoration:none; border-style:solid; width:312px; font-family:Outfit, arial;" target="_blank">Visit our website</a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="5272d300-625f-4a66-b663-fd79b6a6f025">
                                 <tbody><tr><td style="padding:0px 0px 8px 0px;" role="module-content" bgcolor=""></td></tr></tbody>
                               </table>
                               <table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed;" width="100%" data-muid="c95a866e-28e9-405d-a60b-3517a88d4960">
                                <tbody>
                                  <tr>
                                    <td align="center" bgcolor="" class="outer-td" style="padding:0px 0px 0px 0px;">
                                      <table border="0" cellpadding="0" cellspacing="0" class="wrapper-mobile" style="text-align:center;">
                                        <tbody>
                                          <tr>
                                            <td align="center" bgcolor="#F6F4F4" class="inner-td" style="border-radius:6px; font-size:16px; text-align:center; background-color:inherit;">
                                              <a href="linktr.ee/klaytnofficial" style="background-color:#F6F4F4; border:0px solid #333333; border-color:#333333; border-radius:12px; border-width:0px; color:#FF2F00; display:inline-block; font-size:14px; font-weight:bold; letter-spacing:0px; line-height:normal; padding:12px 18px 12px 18px; text-align:center; text-decoration:none; border-style:solid; width:312px; font-family:Outfit, arial;" target="_blank">Follow us on socials</a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="204b541f-c208-4e27-bd1f-8e72e2e6dc4c">
                                <tbody><tr><td style="padding:0px 0px 8px 0px;" role="module-content" bgcolor=""></td></tr></tbody>
                              </table>
                              <div data-role="module-unsubscribe" class="module" role="module" data-type="unsubscribe" style="color:#444444; font-size:12px; line-height:20px; padding:16px 16px 16px 16px; text-align:Center;" data-muid="4e838cf3-9892-4a6d-94d6-170e474d21e5">
                                <div class="Unsubscribe--addressLine"></div>
                                <p style="font-family:Outfit, arial; font-size:12px; line-height:20px;">©2022-24 Klaytn Foundation. All Rights Reserved.</p>
                              </div>
                            </td>
                          </tr>
                        </table>
                        <!--[if mso]>
                          </td></tr></table></center>
                        <![endif]-->
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
          </tr>
        </table>
      </div>
    </center>
  </body>
</html>
`

service.send = async (email, _network, _eventName, _eventContactEmail, _contractDetails) => {
    try {
        let transporter = nodemailer.createTransport({
          host: global.settings['SMTP_EMAIL_HOST'+'-'+_network],
          port: 465,
          secure: true,
          auth: {
            user: global.settings['SMTP_EMAIL_USERNAME'+'-'+_network],
            pass: global.settings['SMTP_EMAIL_PASSWORD'+'-'+_network]
          },
        });
        let emailDynamicMessage = []; // prepare message here
        if(_contractDetails && _contractDetails.length > 0) {
            for(let i=0; i<_contractDetails.length; i++) {
                let contractData = _contractDetails[i];
                if(contractData && (contractData.value != "" || contractData.value != "0") ) {
                    emailDynamicMessage.push(`${contractData.value} ${contractData.coin}`)
                }
            }
        }
        mailForm = mailForm.replace("[EVENT_DYNAMIC_MESSAGE]", emailDynamicMessage.join(' & '));
        mailForm = mailForm.replace("[EVENT_NAME]", _eventName);
        // send mail with defined transport object
        let info = await transporter.sendMail({
          from: `"Klaytn Foundation" <${_eventContactEmail}>`,
          to: email,
          subject: "["+_eventName+"] You’ve just received tokens from Klaytn Foundation",
          html: mailForm
        });
      
        console.log("Message sent: %s", info.messageId);
      } catch(err) {
        console.log("Not able to send email");
        console.log(err);
      }
}

module.exports = service;