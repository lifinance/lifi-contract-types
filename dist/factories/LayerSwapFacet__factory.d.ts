import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { LayerSwapFacet, LayerSwapFacetInterface } from "../LayerSwapFacet";
type LayerSwapFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LayerSwapFacet__factory extends ContractFactory {
    constructor(...args: LayerSwapFacetConstructorParams);
    deploy(_layerSwapDepository: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<LayerSwapFacet>;
    getDeployTransaction(_layerSwapDepository: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): LayerSwapFacet;
    connect(signer: Signer): LayerSwapFacet__factory;
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b50604051611ea7380380611ea783398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b608051611de86100bf5f395f8181605d015281816106df015281816107a701526107ec0152611de85ff3fe608060405260043610610033575f3560e01c80635d7e19e814610037578063b48fae2f1461004c578063c7c9b296146100a8575b5f5ffd5b61004a610045366004611965565b6100bb565b005b348015610057575f5ffd5b5061007f7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61004a6100b63660046119b1565b6102ea565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610136576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101463447611a5e565b90508461016b8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101a2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101df576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361021c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561025a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610298576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102a2888861051c565b6102b488608001518960c001516105f4565b6102be88886106a4565b5047915050818111156102df576102df5f846102da8585611a5e565b61097e565b50505f909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610365576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103753447611a5e565b9050868061010001516103b4576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156103f2576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886104158160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561044c576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610489576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104c6576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104d08a8861051c565b6104e48a5f01518b60c001518b8b336109b3565b60c08b01526104f38a886106a4565b50479150508181111561050f5761050f5f846102da8585611a5e565b50505f9091555050505050565b5f61052d6040830160208401611a96565b73ffffffffffffffffffffffffffffffffffffffff160361057a576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a082015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f11480156105b957506040810135155b156105f0576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b805f0361062d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661068257803410156105f0576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105f073ffffffffffffffffffffffffffffffffffffffff8316333084610af5565b608082015173ffffffffffffffffffffffffffffffffffffffff1661079d5760c082015173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906380a6de929083356107186040860160208701611a96565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b168152600481019290925273ffffffffffffffffffffffffffffffffffffffff1660248201526044015f604051808303818588803b158015610781575f5ffd5b505af1158015610793573d5f5f3e3d5ffd5b50505050506108b9565b6107d082608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610b4d565b608082015173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063f4371f63908335906108266040860160208701611a96565b60c08701516040517fffffffff0000000000000000000000000000000000000000000000000000000060e087901b168152600481019490945273ffffffffffffffffffffffffffffffffffffffff92831660248501529116604483015260648201526084015f604051808303815f87803b1580156108a2575f5ffd5b505af11580156108b4573d5f5f3e3d5ffd5b505050505b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff16036109435760e08201518251604080519084013581527f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c9060200160405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516109729190611b02565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83166109a8576109a38282610b79565b505050565b6109a3838383610be6565b5f828082036109ee576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f85856109fc600185611a5e565b818110610a0b57610a0b611c15565b9050602002810190610a1d9190611c42565b610a2e906080810190606001611a96565b90505f610a3a82610c54565b905073ffffffffffffffffffffffffffffffffffffffff8216610a6457610a613482611a5e565b90505b5f610a6f8888610c9e565b9050610a7b8888610da8565b610a888a89898985610e14565b5f82610a9385610c54565b610a9d9190611a5e565b905089811015610ae7576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610b4057637939f4245f526004601cfd5b5f60605260405250505050565b6109a38383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61105c565b73ffffffffffffffffffffffffffffffffffffffff8216610bc6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105f073ffffffffffffffffffffffffffffffffffffffff831682611189565b73ffffffffffffffffffffffffffffffffffffffff8216610c33576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109a373ffffffffffffffffffffffffffffffffffffffff841683836111a2565b5f73ffffffffffffffffffffffffffffffffffffffff821615610c9657610c9173ffffffffffffffffffffffffffffffffffffffff8316306111eb565b610c98565b475b92915050565b6060815f8167ffffffffffffffff811115610cbb57610cbb611730565b604051908082528060200260200182016040528015610ce4578160200160208202803683370190505b5090505f5f5b83811015610d9d57868682818110610d0457610d04611c15565b9050602002810190610d169190611c42565b610d27906080810190606001611a96565b9150610d3282610c54565b838281518110610d4457610d44611c15565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610d955734838281518110610d7d57610d7d611c15565b60200260200101818151610d919190611a5e565b9052505b600101610cea565b509095945050505050565b5f5b818110156109a35736838383818110610dc557610dc5611c15565b9050602002810190610dd79190611c42565b9050610de960e0820160c08301611c7e565b15610e0b57610e0b610e016060830160408401611a96565b82608001356105f4565b50600101610daa565b83838383825f80805b8381101561104057368c8c83818110610e3857610e38611c15565b9050602002810190610e4a9190611c42565b9050610e596020820182611a96565b9350610e6b6040820160208301611a96565b9250610f0e84610e7e60a0840184611c97565b610e8c916004915f91611cff565b610e9591611d26565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b1580610ff65750610f42610f286060830160408401611a96565b73ffffffffffffffffffffffffffffffffffffffff161590565b158015610f7b57508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b8015610ff6575073ffffffffffffffffffffffffffffffffffffffff83165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b1561102d576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110378e8261121e565b50600101610e1d565b50505050611051848484845f611491565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156111835773ffffffffffffffffffffffffffffffffffffffff83166110c5576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611138573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061115c9190611d8c565b10156111835761118373ffffffffffffffffffffffffffffffffffffffff851684836116a8565b50505050565b5f385f3884865af16105f05763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f511417166111e2576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61123661122e6020830183611a96565b6017903b1190565b61126c576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036112ab576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6112bf610f286060850160408601611a96565b6112c9575f6112cf565b82608001355b90505f6112ea6112e56080860160608701611a96565b610c54565b9050815f03611320576113206113066060860160408701611a96565b6113166040870160208801611a96565b8660800135610b4d565b5f8061132f6020870187611a96565b73ffffffffffffffffffffffffffffffffffffffff168461135360a0890189611c97565b604051611361929190611da3565b5f6040518083038185875af1925050503d805f811461139b576040519150601f19603f3d011682016040523d82523d5f602084013e6113a0565b606091505b5091509150816113b3576113b381611726565b5f6113c76112e56080890160608a01611a96565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886113f860208a018a611a96565b61140860608b0160408c01611a96565b61141860808c0160608d01611a96565b8b6080013589871161142a5786611434565b6114348a88611a5e565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f86826114a0600182611a5e565b8181106114af576114af611c15565b90506020028101906114c19190611c42565b6114d2906080810190606001611a96565b90505f5f5f5f5f5f5f5b88811015611698576114ef60018a611a5e565b811080156114fe575088600114155b156115d9578d8d8281811061151557611515611c15565b90506020028101906115279190611c42565b611538906080810190606001611a96565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16146115d9578a818151811061157f5761157f611c15565b602002602001015161159087610c54565b61159a9190611a5e565b965073ffffffffffffffffffffffffffffffffffffffff8616156115be575f6115c0565b895b9350838711156115d9576115d9868d6102da878b611a5e565b8d8d828181106115eb576115eb611c15565b90506020028101906115fd9190611c42565b61160e906060810190604001611a96565b945061161985610c54565b925073ffffffffffffffffffffffffffffffffffffffff85161561163d575f61163f565b895b9150818311801561167c57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561169057611690858d6102da8587611a5e565b6001016114dc565b5050505050505050505050505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f511417166111e2575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f511417166111e257633e3f8f735f526004601cfd5b8051602082018181fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff8111828210171561178157611781611730565b60405290565b5f82601f830112611796575f5ffd5b813567ffffffffffffffff8111156117b0576117b0611730565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff811182821017156117fd576117fd611730565b604052818152838201602001851015611814575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611853575f5ffd5b919050565b80358015158114611853575f5ffd5b5f6101408284031215611878575f5ffd5b61188061175d565b823581529050602082013567ffffffffffffffff81111561189f575f5ffd5b6118ab84828501611787565b602083015250604082013567ffffffffffffffff8111156118ca575f5ffd5b6118d684828501611787565b6040830152506118e860608301611830565b60608201526118f960808301611830565b608082015261190a60a08301611830565b60a082015260c0828101359082015260e080830135908201526119306101008301611858565b6101008201526119436101208301611858565b61012082015292915050565b5f6060828403121561195f575f5ffd5b50919050565b5f5f60808385031215611976575f5ffd5b823567ffffffffffffffff81111561198c575f5ffd5b61199885828601611867565b9250506119a8846020850161194f565b90509250929050565b5f5f5f5f60a085870312156119c4575f5ffd5b843567ffffffffffffffff8111156119da575f5ffd5b6119e687828801611867565b945050602085013567ffffffffffffffff811115611a02575f5ffd5b8501601f81018713611a12575f5ffd5b803567ffffffffffffffff811115611a28575f5ffd5b8760208260051b8401011115611a3c575f5ffd5b60209190910193509150611a53866040870161194f565b905092959194509250565b81810381811115610c98577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f60208284031215611aa6575f5ffd5b611aaf82611830565b9392505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f60208301516101406040840152611b29610160840182611ab6565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611b648282611ab6565b9150506060840151611b8e608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611bfd61012085018215159052565b50610120840151801515610140850152509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611c74575f5ffd5b9190910192915050565b5f60208284031215611c8e575f5ffd5b611aaf82611858565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611cca575f5ffd5b83018035915067ffffffffffffffff821115611ce4575f5ffd5b602001915036819003821315611cf8575f5ffd5b9250929050565b5f5f85851115611d0d575f5ffd5b83861115611d19575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611d85577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f60208284031215611d9c575f5ffd5b5051919050565b818382375f910190815291905056fea26469706673582212200bae362100ce5dea15e0140e2ba1bd9d73c31cdf82df0cf9b86a4e32ba9ded1764736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_layerSwapDepository";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "LAYERSWAP_DEPOSITORY";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaLayerSwap";
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
            readonly name: "_layerSwapData";
            readonly type: "tuple";
            readonly internalType: "struct LayerSwapFacet.LayerSwapData";
            readonly components: readonly [{
                readonly name: "requestId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "depositoryReceiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nonEVMReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaLayerSwap";
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
            readonly name: "_layerSwapData";
            readonly type: "tuple";
            readonly internalType: "struct LayerSwapFacet.LayerSwapData";
            readonly components: readonly [{
                readonly name: "requestId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "depositoryReceiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nonEVMReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
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
        readonly name: "InvalidCallData";
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
        readonly name: "InvalidNonEVMReceiver";
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
    static createInterface(): LayerSwapFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LayerSwapFacet;
}
export {};
