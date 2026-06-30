import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { PaxosTransitFacet, PaxosTransitFacetInterface } from "../PaxosTransitFacet";
type PaxosTransitFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PaxosTransitFacet__factory extends ContractFactory {
    constructor(...args: PaxosTransitFacetConstructorParams);
    deploy(_transitStation: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<PaxosTransitFacet>;
    getDeployTransaction(_transitStation: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): PaxosTransitFacet;
    connect(signer: Signer): PaxosTransitFacet__factory;
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b5060405161203038038061203083398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b608051611f786100b85f395f818160c10152818161080401526108440152611f785ff3fe60806040526004361061003e575f3560e01c80630ad0587c146100425780638a911d0014610088578063b33b57881461009d578063c3c7a5be146100b0575b5f5ffd5b34801561004d575f5ffd5b506100757f4c4946490000000000000000000000000000000000000000000000000000000081565b6040519081526020015b60405180910390f35b61009b610096366004611968565b610108565b005b61009b6100ab3660046119cd565b610388565b3480156100bb575f5ffd5b506100e37f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161007f565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610183576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101933447611a93565b9050846101b88160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101ef576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361022c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610269576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156102a7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86806101200151156102e5576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87610308816080015173ffffffffffffffffffffffffffffffffffffffff161590565b1561033f576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61035189608001518a60c0015161063e565b61035b89896106f2565b5047925050508181111561037d5761037d5f846103788585611a93565b61091a565b50505f909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610403576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6104133447611a93565b905086806101000151610452576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610490576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886104b38160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156104ea576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610527576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610564576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b89610587816080015173ffffffffffffffffffffffffffffffffffffffff161590565b156105be576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8a515f906105d99060608b01358d8d336101808f013561094f565b905060608901358111156105ff5760808c01516105ff903361037860608d013585611a93565b606089013560c08d01526106138c8a6106f2565b5047935050505081811115610631576106315f846103788585611a93565b50505f9091555050505050565b805f03610677576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166106d057803410156106cc576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6106cc73ffffffffffffffffffffffffffffffffffffffff8316333084610ae9565b806107036040820160208301611acb565b73ffffffffffffffffffffffffffffffffffffffff16836080015173ffffffffffffffffffffffffffffffffffffffff16141580610749575080606001358360c0015114155b80610793575061075f60a0820160808301611acb565b73ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff1614155b806107c357506101008101357f4c4946490000000000000000000000000000000000000000000000000000000014155b156107fa576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61082d83608001517f00000000000000000000000000000000000000000000000000000000000000008560c00151610b41565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016633784896a6101808401358361087e610160870187611aeb565b6040518563ffffffff1660e01b815260040161089c93929190611b9a565b60206040518083038185885af11580156108b8573d5f5f3e3d5ffd5b50505050506040513d601f19601f820116820180604052508101906108dd9190611cae565b507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18360405161090d9190611d11565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff83166109445761093f8282610b6d565b505050565b61093f838383610bda565b5f8380820361098a576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8686610998600185611a93565b8181106109a7576109a7611e24565b90506020028101906109b99190611e51565b6109ca906080810190606001611acb565b90505f6109d682610c48565b905073ffffffffffffffffffffffffffffffffffffffff8216610a00576109fd3482611a93565b90505b5f610a0b8989610c92565b9050610a178989610d9c565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff89166020820152908101879052610a52818b8b85610e08565b5f83610a5d86610c48565b610a679190611a93565b905073ffffffffffffffffffffffffffffffffffffffff8516610a9157610a8e8882611a93565b90505b8b811015610ad9576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d90526024810182905260440160405180910390fd5b9c9b505050505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610b3457637939f4245f526004601cfd5b5f60605260405250505050565b61093f8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61105e565b73ffffffffffffffffffffffffffffffffffffffff8216610bba576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106cc73ffffffffffffffffffffffffffffffffffffffff83168261118b565b73ffffffffffffffffffffffffffffffffffffffff8216610c27576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61093f73ffffffffffffffffffffffffffffffffffffffff841683836111a4565b5f73ffffffffffffffffffffffffffffffffffffffff821615610c8a57610c8573ffffffffffffffffffffffffffffffffffffffff8316306111ed565b610c8c565b475b92915050565b6060815f8167ffffffffffffffff811115610caf57610caf611732565b604051908082528060200260200182016040528015610cd8578160200160208202803683370190505b5090505f5f5b83811015610d9157868682818110610cf857610cf8611e24565b9050602002810190610d0a9190611e51565b610d1b906080810190606001611acb565b9150610d2682610c48565b838281518110610d3857610d38611e24565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610d895734838281518110610d7157610d71611e24565b60200260200101818151610d859190611a93565b9052505b600101610cde565b509095945050505050565b5f5b8181101561093f5736838383818110610db957610db9611e24565b9050602002810190610dcb9190611e51565b9050610ddd60e0820160c08301611e8d565b15610dff57610dff610df56060830160408401611acb565b826080013561063e565b50600101610d9e565b60208401516040850151849184918490835f80805b8381101561104257368c8c83818110610e3857610e38611e24565b9050602002810190610e4a9190611e51565b9050610e596020820182611acb565b9350610e6b6040820160208301611acb565b9250610f0e84610e7e60a0840184611aeb565b610e8c916004915f91611ea6565b610e9591611ecd565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b1580610ff65750610f42610f286060830160408401611acb565b73ffffffffffffffffffffffffffffffffffffffff161590565b158015610f7b57508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b8015610ff6575073ffffffffffffffffffffffffffffffffffffffff83165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b1561102d576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8d516110399082611220565b50600101610e1d565b505050506110538585858585611493565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156111855773ffffffffffffffffffffffffffffffffffffffff83166110c7576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa15801561113a573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061115e9190611cae565b10156111855761118573ffffffffffffffffffffffffffffffffffffffff851684836116aa565b50505050565b5f385f3884865af16106cc5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f511417166111e4576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6112386112306020830183611acb565b6017903b1190565b61126e576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036112ad576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6112c1610f286060850160408601611acb565b6112cb575f6112d1565b82608001355b90505f6112ec6112e76080860160608701611acb565b610c48565b9050815f03611322576113226113086060860160408701611acb565b6113186040870160208801611acb565b8660800135610b41565b5f806113316020870187611acb565b73ffffffffffffffffffffffffffffffffffffffff168461135560a0890189611aeb565b604051611363929190611f33565b5f6040518083038185875af1925050503d805f811461139d576040519150601f19603f3d011682016040523d82523d5f602084013e6113a2565b606091505b5091509150816113b5576113b581611728565b5f6113c96112e76080890160608a01611acb565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886113fa60208a018a611acb565b61140a60608b0160408c01611acb565b61141a60808c0160608d01611acb565b8b6080013589871161142c5786611436565b6114368a88611a93565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f86826114a2600182611a93565b8181106114b1576114b1611e24565b90506020028101906114c39190611e51565b6114d4906080810190606001611acb565b90505f5f5f5f5f5f5f5b8881101561169a576114f160018a611a93565b81108015611500575088600114155b156115db578d8d8281811061151757611517611e24565b90506020028101906115299190611e51565b61153a906080810190606001611acb565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16146115db578a818151811061158157611581611e24565b602002602001015161159287610c48565b61159c9190611a93565b965073ffffffffffffffffffffffffffffffffffffffff8616156115c0575f6115c2565b895b9350838711156115db576115db868d610378878b611a93565b8d8d828181106115ed576115ed611e24565b90506020028101906115ff9190611e51565b611610906060810190604001611acb565b945061161b85610c48565b925073ffffffffffffffffffffffffffffffffffffffff85161561163f575f611641565b895b9150818311801561167e57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561169257611692858d6103788587611a93565b6001016114de565b5050505050505050505050505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f511417166111e4575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f511417166111e457633e3f8f735f526004601cfd5b8051602082018181fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff8111828210171561178357611783611732565b60405290565b5f82601f830112611798575f5ffd5b813567ffffffffffffffff8111156117b2576117b2611732565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff811182821017156117ff576117ff611732565b604052818152838201602001851015611816575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611855575f5ffd5b919050565b80358015158114611855575f5ffd5b5f610140828403121561187a575f5ffd5b61188261175f565b823581529050602082013567ffffffffffffffff8111156118a1575f5ffd5b6118ad84828501611789565b602083015250604082013567ffffffffffffffff8111156118cc575f5ffd5b6118d884828501611789565b6040830152506118ea60608301611832565b60608201526118fb60808301611832565b608082015261190c60a08301611832565b60a082015260c0828101359082015260e08083013590820152611932610100830161185a565b610100820152611945610120830161185a565b61012082015292915050565b5f6101a08284031215611962575f5ffd5b50919050565b5f5f60408385031215611979575f5ffd5b823567ffffffffffffffff81111561198f575f5ffd5b61199b85828601611869565b925050602083013567ffffffffffffffff8111156119b7575f5ffd5b6119c385828601611951565b9150509250929050565b5f5f5f5f606085870312156119e0575f5ffd5b843567ffffffffffffffff8111156119f6575f5ffd5b611a0287828801611869565b945050602085013567ffffffffffffffff811115611a1e575f5ffd5b8501601f81018713611a2e575f5ffd5b803567ffffffffffffffff811115611a44575f5ffd5b8760208260051b8401011115611a58575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611a7b575f5ffd5b611a8787828801611951565b91505092959194509250565b81810381811115610c8c577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f60208284031215611adb575f5ffd5b611ae482611832565b9392505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611b1e575f5ffd5b83018035915067ffffffffffffffff821115611b38575f5ffd5b602001915036819003821315611b4c575f5ffd5b9250929050565b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b5f843563ffffffff8116808214611baf575f5ffd5b83525073ffffffffffffffffffffffffffffffffffffffff611bd360208701611832565b16602083015273ffffffffffffffffffffffffffffffffffffffff611bfa60408701611832565b16604083015260608581013590830152611c1660808601611832565b73ffffffffffffffffffffffffffffffffffffffff16608083015260a0858101359083015260c08086013590830152611c5160e08601611832565b73ffffffffffffffffffffffffffffffffffffffff1660e08301526101008581013590830152610120808601359083015261014080860135908301526101806101608301819052611ca59083018486611b53565b95945050505050565b5f60208284031215611cbe575f5ffd5b5051919050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f60208301516101406040840152611d38610160840182611cc5565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611d738282611cc5565b9150506060840151611d9d608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611e0c61012085018215159052565b50610120840151801515610140850152509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611e83575f5ffd5b9190910192915050565b5f60208284031215611e9d575f5ffd5b611ae48261185a565b5f5f85851115611eb4575f5ffd5b83861115611ec0575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611f2c577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f910190815291905056fea26469706673582212206591553cbd74e1c1952e2a3adb902be491322eeb4fbb98e5cff2fdb91039214f64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_transitStation";
            readonly type: "address";
            readonly internalType: "contract IPaxosTransit";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "LIFI_DISTRIBUTOR_CODE";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "TRANSIT_STATION";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IPaxosTransit";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaPaxosTransit";
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
            readonly name: "_paxosData";
            readonly type: "tuple";
            readonly internalType: "struct PaxosTransitFacet.PaxosTransitData";
            readonly components: readonly [{
                readonly name: "quote";
                readonly type: "tuple";
                readonly internalType: "struct IPaxosTransit.Quote";
                readonly components: readonly [{
                    readonly name: "route";
                    readonly type: "tuple";
                    readonly internalType: "struct IPaxosTransit.Route";
                    readonly components: readonly [{
                        readonly name: "destEID";
                        readonly type: "uint32";
                        readonly internalType: "uint32";
                    }, {
                        readonly name: "offerAsset";
                        readonly type: "address";
                        readonly internalType: "address";
                    }, {
                        readonly name: "wantAsset";
                        readonly type: "address";
                        readonly internalType: "address";
                    }];
                }, {
                    readonly name: "offerAmount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "receiver";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "protocolFee";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "integratorFee";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "integratorFeeReceiver";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "distributorCode";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "deadline";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "salt";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }];
            }, {
                readonly name: "signature";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaPaxosTransit";
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
            readonly name: "_paxosData";
            readonly type: "tuple";
            readonly internalType: "struct PaxosTransitFacet.PaxosTransitData";
            readonly components: readonly [{
                readonly name: "quote";
                readonly type: "tuple";
                readonly internalType: "struct IPaxosTransit.Quote";
                readonly components: readonly [{
                    readonly name: "route";
                    readonly type: "tuple";
                    readonly internalType: "struct IPaxosTransit.Route";
                    readonly components: readonly [{
                        readonly name: "destEID";
                        readonly type: "uint32";
                        readonly internalType: "uint32";
                    }, {
                        readonly name: "offerAsset";
                        readonly type: "address";
                        readonly internalType: "address";
                    }, {
                        readonly name: "wantAsset";
                        readonly type: "address";
                        readonly internalType: "address";
                    }];
                }, {
                    readonly name: "offerAmount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "receiver";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "protocolFee";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "integratorFee";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "integratorFeeReceiver";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "distributorCode";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "deadline";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "salt";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }];
            }, {
                readonly name: "signature";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "nativeFee";
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
        readonly name: "BridgeToNonEVMChain";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChainBytes32";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
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
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidConfig";
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
        readonly name: "NativeAssetNotSupported";
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
    static createInterface(): PaxosTransitFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PaxosTransitFacet;
}
export {};
