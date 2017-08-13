import { IntroView } from "./../views/IntroView";

import { IFlowManager } from "./../../robotlegs/bender/extensions/palidorFlowManager/api/IFlowManager";
import { PixiContainer } from "./../../robotlegs/bender/extensions/palidorFlowManager/impl/PixiContainer";

import { inject, injectable } from "@robotlegsjs/core";
import { Mediator } from "@robotlegsjs/pixi";
@injectable()
export class PixiContainerMediator extends Mediator<PixiContainer> {

    @inject(IFlowManager)
    public flowManager: IFlowManager;

    public initialize(): void {
        this.flowManager.setFlowContainer(this.view);

        this.view.setView(new IntroView());
    }

    public destroy(): void {
        this.eventMap.unmapListeners();
    }
}