import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { FeeCollector, FeeCollectorInterface } from "../../../src/Periphery/FeeCollector";
declare type FeeCollectorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class FeeCollector__factory extends ContractFactory {
    constructor(...args: FeeCollectorConstructorParams);
    deploy(_owner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<FeeCollector>;
    getDeployTransaction(_owner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): FeeCollector;
    connect(signer: Signer): FeeCollector__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060405161171338038061171383398101604081905261002f91610054565b600280546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b611680806100936000396000f3fe6080604052600436106100d25760003560e01c8063bd0b380b1161007f578063e30c397811610059578063e30c39781461023b578063e5d647661461025b578063eedd56e11461027b578063f2fde38b1461029b57600080fd5b8063bd0b380b146101c4578063c489744b146101e4578063e0cbc5f21461022857600080fd5b806364bc5be1116100b057806364bc5be1146101575780637200b829146101775780638da5cb5b1461018c57600080fd5b80630f4efb90146100d75780630fe97f70146100ee578063461ad4f514610137575b600080fd5b3480156100e357600080fd5b506100ec6102bb565b005b3480156100fa57600080fd5b506101246101093660046112d6565b6001600160a01b031660009081526001602052604090205490565b6040519081526020015b60405180910390f35b34801561014357600080fd5b506100ec6101523660046112d6565b61032f565b34801561016357600080fd5b506100ec610172366004611320565b6103cb565b34801561018357600080fd5b506100ec610520565b34801561019857600080fd5b506002546101ac906001600160a01b031681565b6040516001600160a01b03909116815260200161012e565b3480156101d057600080fd5b506100ec6101df3660046112d6565b6105d3565b3480156101f057600080fd5b506101246101ff366004611403565b6001600160a01b0391821660009081526020818152604080832093909416825291909152205490565b6100ec610236366004611436565b61066c565b34801561024757600080fd5b506003546101ac906001600160a01b031681565b34801561026757600080fd5b506100ec610276366004611320565b6107d3565b34801561028757600080fd5b506100ec61029636600461146b565b610929565b3480156102a757600080fd5b506100ec6102b63660046112d6565b6109e9565b6102c3610add565b6003546001600160a01b0316610305576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600380547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b610337610add565b6001600160a01b0381166000908152600160205260408120549081900361035c575050565b6001600160a01b038083166000908152600160205260408120556002546103869184911683610b2a565b60405181815233906001600160a01b038416907fe0ac2a6b74759312758ae3b784411c8e2f3b8bd81fecff40b906d69030af4bfc906020015b60405180910390a35050565b6103d3610add565b80516000805b8281101561051a57600160008583815181106103f7576103f76114b1565b60200260200101516001600160a01b03166001600160a01b03168152602001908152602001600020549150816000031561050857600060016000868481518110610443576104436114b1565b60200260200101516001600160a01b03166001600160a01b03168152602001908152602001600020819055506104a1848281518110610484576104846114b1565b60209081029190910101516002546001600160a01b031684610b2a565b336001600160a01b03168482815181106104bd576104bd6114b1565b60200260200101516001600160a01b03167fe0ac2a6b74759312758ae3b784411c8e2f3b8bd81fecff40b906d69030af4bfc846040516104ff91815260200190565b60405180910390a35b806105128161150f565b9150506103d9565b50505050565b6003546001600160a01b03163314610564576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60038054600280546001600160a01b0383167fffffffffffffffffffffffff00000000000000000000000000000000000000009182168117909255909116909155604051600091907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3565b336000908152602081815260408083206001600160a01b038516845290915281205490819003610601575050565b336000818152602081815260408083206001600160a01b038716845290915281205561062f90839083610b2a565b60405181815233906001600160a01b038416907f5e110f8bc8a20b65dcc87f224bdf1cc039346e267118bae2739847f07321ffa8906020016103bf565b6001600160a01b0381166000908152602081815260408083208380529091528120805485929061069d908490611547565b9091555050600080805260016020527fa6eef7e35abe7026729641147f7915573c7e97b47efa546f5f6e3230263bcb4980548492906106dd908490611547565b90915550600090506106ef8385611547565b6106f9903461155f565b9050801561078557604051600090339083908381818185875af1925050503d8060008114610743576040519150601f19603f3d011682016040523d82523d6000602084013e610748565b606091505b5050905080610783576040517ff7e6817a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505b60408051858152602081018590526001600160a01b038416916000917f28a87b6059180e46de5fb9ab35eb043e8fe00ab45afcc7789e3934ecbbcde3ea91015b60405180910390a350505050565b80516000805b8281101561051a573360009081526020819052604081208551909190869084908110610807576108076114b1565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002054915081600003156109175733600090815260208190526040812085518290879085908110610860576108606114b1565b60200260200101516001600160a01b03166001600160a01b03168152602001908152602001600020819055506108b08482815181106108a1576108a16114b1565b60200260200101513384610b2a565b336001600160a01b03168482815181106108cc576108cc6114b1565b60200260200101516001600160a01b03167f5e110f8bc8a20b65dcc87f224bdf1cc039346e267118bae2739847f07321ffa88460405161090e91815260200190565b60405180910390a35b806109218161150f565b9150506107d9565b61093c846109378486611547565b610b53565b6001600160a01b0380821660009081526020818152604080832093881683529290529081208054859290610971908490611547565b90915550506001600160a01b0384166000908152600160205260408120805484929061099e908490611547565b909155505060408051848152602081018490526001600160a01b0380841692908716917f28a87b6059180e46de5fb9ab35eb043e8fe00ab45afcc7789e3934ecbbcde3ea91016107c5565b6109f1610add565b6001600160a01b038116610a31576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002546001600160a01b0390811690821603610a79576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600380547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b03831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b6002546001600160a01b03163314610b28576040517f8e4a23d60000000000000000000000000000000000000000000000000000000081523360048201526024015b60405180910390fd5b565b6001600160a01b03831615610b4957610b44838383610b6c565b505050565b610b448282610bb7565b610b6882826001600160a01b03821615610c84565b5050565b6001600160a01b038316610bac576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b44838383610d99565b6001600160a01b038216610bf7576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114610c44576040519150601f19603f3d011682016040523d82523d6000602084013e610c49565b606091505b5050905080610b44576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81600003610cbe576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8015610cfd57813414610b44576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3415610d34576040517e3f45b500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610d3f84610e60565b9050610d4d84333086610eff565b8281610d5886610e60565b610d62919061155f565b1461051a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040516001600160a01b038316602482015260448101829052610b449084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152610f8b565b60006001600160a01b03821615610ef7576040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526001600160a01b038316906370a0823190602401602060405180830381865afa158015610ece573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ef29190611576565b610ef9565b475b92915050565b6001600160a01b038416610f3f576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600160a01b038216610f7f576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61051a8484848461108a565b6000610fe0826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166110db9092919063ffffffff16565b805190915015610b445780806020019051810190610ffe919061158f565b610b44576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610b1f565b6040516001600160a01b038085166024830152831660448201526064810182905261051a9085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401610dde565b60606110ea84846000856110f4565b90505b9392505050565b606082471015611186576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610b1f565b843b6111ee576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610b1f565b600080866001600160a01b0316858760405161120a91906115dd565b60006040518083038185875af1925050503d8060008114611247576040519150601f19603f3d011682016040523d82523d6000602084013e61124c565b606091505b509150915061125c828286611267565b979650505050505050565b606083156112765750816110ed565b8251156112865782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b1f91906115f9565b80356001600160a01b03811681146112d157600080fd5b919050565b6000602082840312156112e857600080fd5b6110ed826112ba565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000602080838503121561133357600080fd5b823567ffffffffffffffff8082111561134b57600080fd5b818501915085601f83011261135f57600080fd5b813581811115611371576113716112f1565b8060051b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f830116810181811085821117156113b4576113b46112f1565b6040529182528482019250838101850191888311156113d257600080fd5b938501935b828510156113f7576113e8856112ba565b845293850193928501926113d7565b98975050505050505050565b6000806040838503121561141657600080fd5b61141f836112ba565b915061142d602084016112ba565b90509250929050565b60008060006060848603121561144b57600080fd5b8335925060208401359150611462604085016112ba565b90509250925092565b6000806000806080858703121561148157600080fd5b61148a856112ba565b935060208501359250604085013591506114a6606086016112ba565b905092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611540576115406114e0565b5060010190565b6000821982111561155a5761155a6114e0565b500190565b600082821015611571576115716114e0565b500390565b60006020828403121561158857600080fd5b5051919050565b6000602082840312156115a157600080fd5b815180151581146110ed57600080fd5b60005b838110156115cc5781810151838201526020016115b4565b8381111561051a5750506000910152565b600082516115ef8184602087016115b1565b9190910192915050565b60208152600082518060208401526116188160408501602087016115b1565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea26469706673582212203a25a29ea11b6d44241cff2cbf12d4eee8188286c36aba21312cc51c3fac07fd64736f6c634300080d0033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): FeeCollectorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): FeeCollector;
}
export {};
