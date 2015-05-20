var Icon = require('../Icon');
var PhotoField = React.createClass({
    getDefaultProps: function() {
        return {
            photoUrl: '',
            className: ''
        };
    },
    getInitialState: function() {
        return {
            className: this.props.className,
            photoUrl:  this.props.photoUrl,
            label:     this.props.label,
            icon:      this.props.icon
        };
    },
    showPhotoUtil: function () {
        var t = this;
        WindVane.call('WVCamera', 'takePhoto', {
            'type': '0'
        }, function(e1) {
            WindVane.call('WVCamera', 'confirmUploadPhoto', {
                path: e1.localPath
            }, function(e2) {
                t.setState({
                    photoUrl: e2.resourceURL
                });
            }, function() {
                alert('上传失败！');
            });
        }, function(e) {});
    },
    showPhoto: function () {
        
    },
    render: function () {
        var t = this;
        return (
            <div className={"tPhotoField tFBH tFBAC tPR4 " + t.state.className}>
                <div className="tMR10">{t.state.label}</div>
                <div className="tFB1 tFBH tFBAC tFBJE">
                    {
                        t.state.photoUrl
                        ? <img className="tPhotoFieldPreview"
                          src={t.state.photoUrl}
                          onClick={t.showPhoto}/>
                        : ''
                    }
                    <div className="tPhotoFieldIcon tML4"
                     onClick={t.showPhotoUtil}>
                        <Icon name={t.state.icon}/>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = PhotoField;