import { HandlerExecutionContext } from "../middleware.d.ts";
import { HttpAuthOption } from "./HttpAuthScheme.d.ts";
/**
 * @internal
 */
export interface HttpAuthSchemeParameters {
    operation?: string;
}
/**
 * @internal
 */
export interface HttpAuthSchemeProvider<TParameters extends HttpAuthSchemeParameters> {
    (authParameters: TParameters): HttpAuthOption[];
}
/**
 * @internal
 */
export interface HttpAuthSchemeParametersProvider<TConfig extends object, TContext extends HandlerExecutionContext, TParameters extends HttpAuthSchemeParameters, TInput extends object> {
    (config: TConfig, context: TContext, input: TInput): Promise<TParameters>;
}
