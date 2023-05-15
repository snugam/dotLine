import React from 'react';
import ValueCounter from './props/valuecounter';
import './settings.scss';
import Selector from './props/selector';


const Settings: React.FC<IAppConfig> = ({ appconfig }) => {
    return (
        <div className='adjust-settings'>
            <ValueCounter
                propname={appconfig.dotConfig!.propname}
                fieldname={appconfig.dotConfig!.fieldname}
                value={appconfig.dotConfig!.value}
                increment={appconfig.dotConfig!.increment}
                decrement={appconfig.dotConfig!.decrement}
            />
            <ValueCounter
                propname={appconfig.canvasConfig!.canvasWidthConfig.propname}
                fieldname={appconfig.canvasConfig!.canvasWidthConfig.fieldname}
                value={appconfig.canvasConfig!.canvasWidthConfig.value}
                increment={appconfig.canvasConfig!.canvasWidthConfig.increment}
                decrement={appconfig.canvasConfig!.canvasWidthConfig.decrement}
            />
            <ValueCounter
                propname={appconfig.canvasConfig!.canvasHeightConfig.propname}
                fieldname={appconfig.canvasConfig!.canvasHeightConfig.fieldname}
                value={appconfig.canvasConfig!.canvasHeightConfig.value}
                increment={appconfig.canvasConfig!.canvasHeightConfig.increment}
                decrement={appconfig.canvasConfig!.canvasHeightConfig.decrement}
            />
            <Selector
                propname={appconfig.shapeSelect!.propname}
                fieldname={appconfig.shapeSelect!.fieldname}
                options={appconfig.shapeSelect!.options}
                value={appconfig.shapeSelect!.value}
                onchange={appconfig.shapeSelect!.onchange}
            />
        </div>
    )
}

export default Settings;