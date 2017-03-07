import axios from 'axios';

const hasSubdomain = typeof(subdomain) !== 'undefined' && subdomain !== 'www';
if (hasSubdomain) {
  var subdomainParam = `&subdomain=${subdomain}`;
} else {
  var subdomainParam = '';
}

export function getSite() {
    return function (dispatch) {
      if (window.location.hostname.split('.')[0] === 'localhost') {
        dispatch({
            type: 'SET_SITE',
            payload: {
                description: 'localhost description',
                keywords: 'localhost keywords',
                organization_id: 123,
                organizationName: 'localhost Organization',
                title: 'Title of Localhost',
                useDemo: 1
            },
        });
      } else {
          const sitePath = `sites.php?do=get&site=${site}${subdomainParam}`;
          axios.get(sitePath)
                .then((response) => {
                    dispatch({
                        type: 'SET_SITE',
                        payload: {
                            description: response.data.description,
                            keywords: response.data.keywords,
                            organization_id: response.data.organization_id,
                            organizationName: response.data.name,
                            partner_id: response.data.partner_id,
                            title: response.data.title,
                            subdomain_id: response.data.subdomain_id,
                            useDemo: response.data.useDemo
                        },
                    });
                })
                .catch((err) => {

                });
      }
    };

}


export function setSite(title, description, keywords, organizationId, organizationName, partnerId, useDemo, callback) {
  return function (dispatch) {
    // PLEASE NOTE.. must not break up paramStr into separate lines.  It won't pass as $_GET properly
    const paramStr = `&description=${description}&title=${title}&keywords=${keywords}&organization_id=${organizationId}&organizationName=${organizationName}&partner_id=${partnerId}&useDemo=${useDemo}`;
    const sitePath = `sites.php?do=set&site=${site}${subdomainParam}${paramStr}`;
    console.log(sitePath);
    axios.get(sitePath)
      .then((response) => {
        dispatch({
            type: 'SET_SITE',
            payload: {
              description: response.data.description,
              keywords: response.data.keywords,
              title: response.data.title,
              organization_id: response.data.organization_id,
              organizationName: response.data.organizationName,
              partner_id: response.data.partner_id,
              useDemo: response.data.useDemo
            },
          });
        callback();
        })
      .catch((err) => {

      });
  };
}

export function getLogoJson() {
  return function (dispatch) {
    axios.get(`${window.host}sites/getLogoJson?site=${site}${subdomainParam}`)
      .then((response) => {
        dispatch({
          type: 'SET_LOGOURL',
          payload: `https://drive.google.com/open?id=${response.data.fileId}`
        });
      })
      .catch((err) => {

      });
  };
}

export function renderLogo(fileId, callback) {
  return function (dispatch) {
    axios.get(`${window.host}sites/renderLogo?site=${site}${subdomainParam}&fileId=${fileId}`)
      .then((response) => {
        dispatch({
          type: 'SET_LOGOURL',
          payload: `https://drive.google.com/open?id=${response.data.fileId}`
        });
        callback();
      })
      .catch((err) => {

      });
  };
}

export function setDescription(description) {
  return {
    type: 'SET_DESCRIPTION',
    payload: description,
  };
}

export function setOrganizationName(organizationName) {
  return {
    type: 'SET_ORGANIZATIONNAME',
    payload: organizationName,
  };
}

export function setOrganizationId(organizationId) {
  return {
    type: 'SET_ORGANIZATIONID',
    payload: organizationId,
  };
}

export function setPartnerId(partnerId) {
  return {
    type: 'SET_PARTNERID',
    payload: partnerId,
  };
}

export function setKeywords(keywords) {
  return {
    type: 'SET_KEYWORDS',
    payload: keywords,
  };
}

export function setTitle(title) {
  return {
    type: 'SET_TITLE',
    payload: title,
  };
}

export function setLogoUrl(logoUrl) {
  return {
    type: 'SET_LOGOURL',
    payload: logoUrl,
  };
}
export function setUseDemo(useDemo) {
  return {
    type: 'SET_USEDEMO',
    payload: useDemo,
  };
}
