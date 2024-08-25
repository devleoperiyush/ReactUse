interface ITokenObj  {
    access_token : string,
    refresh_token :  string,
    loginType: string
};

const LocalStorageService =  (function() {

    function _setToken(tokenObj : ITokenObj)
    {
        localStorage.setItem("access_token",tokenObj.access_token);
        localStorage.setItem("refresh_token",tokenObj.refresh_token);
        localStorage.setItem("loginType",tokenObj.loginType);
    }

    function _getTokenByKey(tokenKey : string)
    {
        localStorage.getItem(tokenKey);
    }

    function _clearToken()
    {
        localStorage.clear();
    }
return {
    setToken : _setToken,
    getTokenByKey :  _getTokenByKey,
    clearToken : _clearToken
}
})();

export default LocalStorageService;