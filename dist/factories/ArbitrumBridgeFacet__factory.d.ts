import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ArbitrumBridgeFacet, ArbitrumBridgeFacetInterface } from "../ArbitrumBridgeFacet";
declare type ArbitrumBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ArbitrumBridgeFacet__factory extends ContractFactory {
    constructor(...args: ArbitrumBridgeFacetConstructorParams);
    deploy(_gatewayRouter: PromiseOrValue<string>, _inbox: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ArbitrumBridgeFacet>;
    getDeployTransaction(_gatewayRouter: PromiseOrValue<string>, _inbox: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ArbitrumBridgeFacet;
    connect(signer: Signer): ArbitrumBridgeFacet__factory;
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b5060405161201d38038061201d83398101604081905261002e91610060565b6001600160a01b039182166080521660a052610091565b80516001600160a01b038116811461005b575f5ffd5b919050565b5f5f60408385031215610071575f5ffd5b61007a83610045565b915061008860208401610045565b90509250929050565b60805160a051611f646100b95f395f6106a201525f818161081b01526108920152611f645ff3fe608060405260043610610028575f3560e01c80633cc9517b1461002c578063c9851d0b14610041575b5f5ffd5b61003f61003a3660046119b5565b610054565b005b61003f61004f366004611a62565b6102a4565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100cf576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100df3447611adb565b90508680610100015161011e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561015c576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861017f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101f3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610230576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610243604089013560208a0135611aee565b61024e908935611b05565b90506102658b5f01518c60c001518c8c33866104e6565b60c08c01526102758b8983610681565b50479250505081811115610297576102975f846102928585611adb565b6109d9565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161031f576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61032f3447611adb565b9050848061010001511561036f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101200151156103ad576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866103d08160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610407576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610444576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610481576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610494604089013560208a0135611aee565b61049f908935611b05565b90506104b389608001518a60c00151610a0e565b6104be898983610681565b504792505050818111156104db576104db5f846102928585611adb565b50505f909155505050565b5f83808203610521576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f868661052f600185611adb565b81811061053e5761053e611b18565b90506020028101906105509190611b45565b610561906080810190606001611b81565b90505f61056d82610ac2565b905073ffffffffffffffffffffffffffffffffffffffff8216610597576105943482611adb565b90505b5f6105a28989610b0c565b90506105ae8989610c16565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff891660208201529081018790526105e9818b8b85610c82565b5f836105f486610ac2565b6105fe9190611adb565b905073ffffffffffffffffffffffffffffffffffffffff8516610628576106258882611adb565b90505b8b811015610671576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d9052602481018290526044015b60405180910390fd5b9c9b505050505050505050505050565b608083015173ffffffffffffffffffffffffffffffffffffffff166107cc577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16636e6e8a6a828560c001516106ec9190611b05565b60a086015160c08701516040805160e086901b7fffffffff0000000000000000000000000000000000000000000000000000000016815273ffffffffffffffffffffffffffffffffffffffff90931660048401819052602484019290925287356044840152606483018290526084830191909152602087013560a483015286013560c482015261010060e48201525f6101048201526101240160206040518083038185885af11580156107a1573d5f5f3e3d5ffd5b50505050506040513d601f19601f820116820180604052508101906107c69190611ba3565b5061099d565b60808301516040517fbda009fe00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff808316600483015261089092917f00000000000000000000000000000000000000000000000000000000000000009091169063bda009fe90602401602060405180830381865afa158015610862573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108869190611bba565b8560c00151611028565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d2ce7d658285608001518660a001518760c0015187602001358860400135895f013560405160200161090a9181526040602082018190525f9082015260600190565b6040516020818303038152906040526040518863ffffffff1660e01b815260040161093a96959493929190611c21565b5f6040518083038185885af1158015610955573d5f5f3e3d5ffd5b50505050506040513d5f823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261099b9190810190611c89565b505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1836040516109cc9190611cfe565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff8316610a03576109fe8282611054565b505050565b6109fe8383836110c1565b805f03610a47576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610aa05780341015610a9c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610a9c73ffffffffffffffffffffffffffffffffffffffff831633308461112f565b5f73ffffffffffffffffffffffffffffffffffffffff821615610b0457610aff73ffffffffffffffffffffffffffffffffffffffff831630611187565b610b06565b475b92915050565b6060815f8167ffffffffffffffff811115610b2957610b29611737565b604051908082528060200260200182016040528015610b52578160200160208202803683370190505b5090505f805b83811015610c0b57868682818110610b7257610b72611b18565b9050602002810190610b849190611b45565b610b95906080810190606001611b81565b9150610ba082610ac2565b838281518110610bb257610bb2611b18565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610c035734838281518110610beb57610beb611b18565b60200260200101818151610bff9190611adb565b9052505b600101610b58565b509095945050505050565b5f5b818110156109fe5736838383818110610c3357610c33611b18565b9050602002810190610c459190611b45565b9050610c5760e0820160c08301611e11565b15610c7957610c79610c6f6060830160408401611b81565b8260800135610a0e565b50600101610c18565b6020840151604085015184918491849083805f5b81811015610e3957368b8b83818110610cb157610cb1611b18565b9050602002810190610cc39190611b45565b9050610cf2610cd86060830160408401611b81565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610d545750610d54610d0b6040830160208401611b81565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610d6b5750610d6b610d0b6020830183611b81565b8015610dee5750610dee610d8260a0830183611e2a565b610d90916004915f91611e92565b610d9991611eb9565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610e24576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c51610e3090826111ba565b50600101610c96565b505080600114610f81575f8686610e51600185611adb565b818110610e6057610e60611b18565b9050602002810190610e729190611b45565b610e83906080810190606001611b81565b90505f805b610e93600185611adb565b811015610f7d575f898983818110610ead57610ead611b18565b9050602002810190610ebf9190611b45565b610ed0906080810190606001611b81565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610f7457868281518110610f1757610f17611b18565b6020026020010151610f2882610ac2565b610f329190611adb565b92505f73ffffffffffffffffffffffffffffffffffffffff821615610f57575f610f59565b865b905080841115610f7257610f72828a6102928488611adb565b505b50600101610e88565b5050505b5f5b8181101561101b575f878783818110610f9e57610f9e611b18565b9050602002810190610fb09190611b45565b610fc1906060810190604001611b81565b90505f610fcd82610ac2565b90505f73ffffffffffffffffffffffffffffffffffffffff831615610ff2575f610ff4565b855b90508082111561100d5761100d83896102928486611adb565b836001019350505050610f83565b5050505050505050505050565b6109fe8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61148c565b73ffffffffffffffffffffffffffffffffffffffff82166110a1576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a9c73ffffffffffffffffffffffffffffffffffffffff8316826115b9565b73ffffffffffffffffffffffffffffffffffffffff821661110e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109fe73ffffffffffffffffffffffffffffffffffffffff841683836115d2565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661117a57637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6111cf6111ca6020830183611b81565b61161b565b611205576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611244576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f611258610cd86060850160408601611b81565b611262575f611268565b82608001355b90505f61128361127e6060860160408701611b81565b610ac2565b90505f61129961127e6080870160608801611b81565b9050825f036112cf576112cf6112b56060870160408801611b81565b6112c56040880160208901611b81565b8760800135611028565b846080013582101561131a576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610668565b5f806113296020880188611b81565b73ffffffffffffffffffffffffffffffffffffffff168561134d60a08a018a611e2a565b60405161135b929190611f1f565b5f6040518083038185875af1925050503d805f8114611395576040519150601f19603f3d011682016040523d82523d5f602084013e61139a565b606091505b5091509150816113ad576113ad816116af565b5f6113c161127e60808a0160608b01611b81565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896113f260208b018b611b81565b61140260608c0160408d01611b81565b61141260808d0160608e01611b81565b8c60800135898711611424578661142e565b61142e8a88611adb565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156115b35773ffffffffffffffffffffffffffffffffffffffff83166114f5576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611568573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061158c9190611ba3565b10156115b3576115b373ffffffffffffffffffffffffffffffffffffffff851684836116b9565b50505050565b5f385f3884865af1610a9c5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611612576390b8ec185f526004601cfd5b5f603452505050565b6040805160178082528183019092525f9182919060208201818036833701905050905060175f60208301853c60208101517f10ff0000000000000000000000000000000000000000000000000000000000007fffffff00000000000000000000000000000000000000000000000000000000008216016116a657506023015160601c3b151592915050565b5050503b151590565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611612575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661161257633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff8111828210171561178857611788611737565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156117d5576117d5611737565b604052919050565b5f67ffffffffffffffff8211156117f6576117f6611737565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b5f82601f830112611831575f5ffd5b813561184461183f826117dd565b61178e565b818152846020838601011115611858575f5ffd5b816020850160208301375f918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff81168114611895575f5ffd5b50565b80356118a381611874565b919050565b803580151581146118a3575f5ffd5b5f61014082840312156118c8575f5ffd5b6118d0611764565b823581529050602082013567ffffffffffffffff8111156118ef575f5ffd5b6118fb84828501611822565b602083015250604082013567ffffffffffffffff81111561191a575f5ffd5b61192684828501611822565b60408301525061193860608301611898565b606082015261194960808301611898565b608082015261195a60a08301611898565b60a082015260c0828101359082015260e0808301359082015261198061010083016118a8565b61010082015261199361012083016118a8565b61012082015292915050565b5f606082840312156119af575f5ffd5b50919050565b5f5f5f5f60a085870312156119c8575f5ffd5b843567ffffffffffffffff8111156119de575f5ffd5b6119ea878288016118b7565b945050602085013567ffffffffffffffff811115611a06575f5ffd5b8501601f81018713611a16575f5ffd5b803567ffffffffffffffff811115611a2c575f5ffd5b8760208260051b8401011115611a40575f5ffd5b60209190910193509150611a57866040870161199f565b905092959194509250565b5f5f60808385031215611a73575f5ffd5b823567ffffffffffffffff811115611a89575f5ffd5b611a95858286016118b7565b925050611aa5846020850161199f565b90509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b81810381811115610b0657610b06611aae565b8082028115828204841417610b0657610b06611aae565b80820180821115610b0657610b06611aae565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611b77575f5ffd5b9190910192915050565b5f60208284031215611b91575f5ffd5b8135611b9c81611874565b9392505050565b5f60208284031215611bb3575f5ffd5b5051919050565b5f60208284031215611bca575f5ffd5b8151611b9c81611874565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b73ffffffffffffffffffffffffffffffffffffffff8716815273ffffffffffffffffffffffffffffffffffffffff8616602082015284604082015283606082015282608082015260c060a08201525f611c7d60c0830184611bd5565b98975050505050505050565b5f60208284031215611c99575f5ffd5b815167ffffffffffffffff811115611caf575f5ffd5b8201601f81018413611cbf575f5ffd5b8051611ccd61183f826117dd565b818152856020838501011115611ce1575f5ffd5b8160208401602083015e5f91810160200191909152949350505050565b60208152815160208201525f60208301516101406040840152611d25610160840182611bd5565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611d608282611bd5565b9150506060840151611d8a608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611df961012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215611e21575f5ffd5b611b9c826118a8565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611e5d575f5ffd5b83018035915067ffffffffffffffff821115611e77575f5ffd5b602001915036819003821315611e8b575f5ffd5b9250929050565b5f5f85851115611ea0575f5ffd5b83861115611eac575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611f18577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f910190815291905056fea2646970667358221220358fb1eb00ac4a6e5ddb383420068394ad5bae03ba51982230f833680aff4ec464736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_gatewayRouter";
            readonly type: "address";
            readonly internalType: "contract IGatewayRouter";
        }, {
            readonly name: "_inbox";
            readonly type: "address";
            readonly internalType: "contract IGatewayRouter";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaArbitrumBridge";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_arbitrumData";
            readonly type: "tuple";
            readonly internalType: "struct ArbitrumBridgeFacet.ArbitrumData";
            readonly components: readonly [{
                readonly name: "maxSubmissionCost";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "maxGas";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "maxGasPrice";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaArbitrumBridge";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_swapData";
            readonly type: "tuple[]";
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly components: readonly [{
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approveTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "requiresDeposit";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_arbitrumData";
            readonly type: "tuple";
            readonly internalType: "struct ArbitrumBridgeFacet.ArbitrumData";
            readonly components: readonly [{
                readonly name: "maxSubmissionCost";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "maxGas";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "maxGasPrice";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "AssetSwapped";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }, {
            readonly name: "dex";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiGenericSwapCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiSwappedGeneric";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferRecovered";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferStarted";
        readonly inputs: readonly [{
            readonly name: "bridgeData";
            readonly type: "tuple";
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "CannotBridgeToSameNetwork";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ContractCallNotAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "CumulativeSlippageTooHigh";
        readonly inputs: readonly [{
            readonly name: "minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receivedAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InformationMismatch";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InsufficientBalance";
        readonly inputs: readonly [{
            readonly name: "required";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "balance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapDataProvided";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapFromZeroBalance";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): ArbitrumBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ArbitrumBridgeFacet;
}
export {};
