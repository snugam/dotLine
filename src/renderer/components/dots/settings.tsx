import React from 'react';
import PropHandler from './settings/handleprops';
import './settings.scss';


const Settings: React.FC<IAppConfig> = ({ appconfig }) => {
    return (
        <div className='adjust-settings'>
            <PropHandler
                propname={appconfig.dotConfig!.propname}
                fieldname={appconfig.dotConfig!.fieldname}
                value={appconfig.dotConfig!.value}
                increment={appconfig.dotConfig!.increment}
                decrement={appconfig.dotConfig!.decrement}
            />
            <PropHandler
                propname={appconfig.canvasConfig!.canvasWidthConfig.propname}
                fieldname={appconfig.canvasConfig!.canvasWidthConfig.fieldname}
                value={appconfig.canvasConfig!.canvasWidthConfig.value}
                increment={appconfig.canvasConfig!.canvasWidthConfig.increment}
                decrement={appconfig.canvasConfig!.canvasWidthConfig.decrement}
            />
            <PropHandler
                propname={appconfig.canvasConfig!.canvasHeightConfig.propname}
                fieldname={appconfig.canvasConfig!.canvasHeightConfig.fieldname}
                value={appconfig.canvasConfig!.canvasHeightConfig.value}
                increment={appconfig.canvasConfig!.canvasHeightConfig.increment}
                decrement={appconfig.canvasConfig!.canvasHeightConfig.decrement}
            />
        </div>
    )
}

export default Settings;