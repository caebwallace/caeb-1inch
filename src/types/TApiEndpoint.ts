import { TApiEndpointKeys } from './TApiEndpointKeys';

export type TApiEndpoint = {
    [endpoint in TApiEndpointKeys]: string;
};
