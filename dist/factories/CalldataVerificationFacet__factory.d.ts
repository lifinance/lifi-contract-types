import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { CalldataVerificationFacet, CalldataVerificationFacetInterface } from "../CalldataVerificationFacet";
type CalldataVerificationFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CalldataVerificationFacet__factory extends ContractFactory {
    constructor(...args: CalldataVerificationFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<CalldataVerificationFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): CalldataVerificationFacet;
    connect(signer: Signer): CalldataVerificationFacet__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b50611ec48061001c5f395ff3fe608060405234801561000f575f5ffd5b5060043610610085575f3560e01c8063d53482cf11610058578063d53482cf1461014e578063df1c3a5b14610171578063ee0aa32014610192578063f58ae2ce146101b8575f5ffd5b8063070e81f114610089578063103c5200146100b25780637f99d7af146100d3578063c318eeda146100f3575b5f5ffd5b61009c610097366004610e8d565b6101cb565b6040516100a99190611044565b60405180910390f35b6100c56100c0366004610e8d565b6101de565b6040516100a9929190611151565b6100e66100e1366004610e8d565b61029f565b6040516100a9919061117e565b610106610101366004610e8d565b61033d565b6040805173ffffffffffffffffffffffffffffffffffffffff96871681526020810195909552928516928401929092529092166060820152608081019190915260a0016100a9565b61016161015c3660046111d3565b6105dd565b60405190151581526020016100a9565b61018461017f366004610e8d565b6107d9565b6040519081526020016100a9565b6101a56101a0366004610e8d565b610851565b6040516100a99796959493929190611299565b6101616101c63660046112f6565b610905565b60606101d78383610cbe565b9392505050565b6102726040518061014001604052805f815260200160608152602001606081526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f81526020015f81526020015f151581526020015f151581525090565b606061027e8484610ce2565b915081610100015115610298576102958484610cbe565b90505b9250929050565b6103336040518061014001604052805f815260200160608152602001606081526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f81526020015f81526020015f151581526020015f151581525090565b6101d78383610ce2565b5f808080806101e4861161037d576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60605f61038d6004828a8c611395565b610396916113bc565b90507fffffffff0000000000000000000000000000000000000000000000000000000081167f4666fc8000000000000000000000000000000000000000000000000000000000148061042957507fffffffff0000000000000000000000000000000000000000000000000000000081167f733214a300000000000000000000000000000000000000000000000000000000145b8061047557507fffffffff0000000000000000000000000000000000000000000000000000000081167faf7060fd00000000000000000000000000000000000000000000000000000000145b1561053f5760408051600180825281830190925290816020015b6040805160e0810182525f808252602080830182905292820181905260608083018290526080830182905260a083015260c082015282527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90920191018161048f579050509150610503886004818c611395565b8101906105109190611641565b8751929550909350915085905f9061052a5761052a6116f3565b60209081029190910101529095509250610564565b61054c886004818c611395565b81019061055991906117ba565b919950965094505050505b815f81518110610576576105766116f3565b6020026020010151604001519650815f81518110610596576105966116f3565b602002602001015160800151955081600183516105b3919061185f565b815181106105c3576105c36116f3565b602002602001015160600151935050509295509295909350565b5f5f6105e98c8c610ce2565b90505f8a8a6040516020016105ff929190611897565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815282825280516020918201205f8452908301918290529151902090915081148061067c575080826020015160405160200161066491906118a6565b60405160208183030381529060405280519060200120145b80156106d6575073ffffffffffffffffffffffffffffffffffffffff808a1614806106d657508873ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff16145b8015610730575073ffffffffffffffffffffffffffffffffffffffff808916148061073057508773ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff16145b801561076857507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8714806107685750868260c00151145b80156107a057507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8614806107a05750858260e00151145b80156107b457508415158261010001511515145b80156107c857508315158261012001511515145b9d9c50505050505050505050505050565b5f5f83838080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152509293506108209250869150859050610ce2565b61010001511561083c576064810151810160240151915061084a565b604481015181016024015191505b5092915050565b60605f5f5f5f5f5f5f6108648a8a610ce2565b9050806101000151156108c4575f61087c8b8b610cbe565b9050805f81518110610890576108906116f3565b6020026020010151604001519750805f815181106108b0576108b06116f3565b6020026020010151608001519550506108d3565b806080015196508060c0015194505b602081015160a082015160e083015161010084015161012090940151929d999c50909a50959850949690955092505050565b5f80610914600482898b611395565b61091d916113bc565b90507feb2acf89000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610a04575f610976886004818c611395565b8101906109839190611b3c565b915050806020015160a001518051906020012085856040516109a6929190611897565b60405180910390201480156109fb57506109fb87878080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152505050506020838101510151610d90565b92505050610cb4565b7f59fef59a000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610a8c575f610a5b886004818c611395565b810190610a689190611ba1565b92505050806020015160a001518051906020012085856040516109a6929190611897565b7fd733bcea000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610b7c575f610ae3886004818c611395565b810190610af09190611d22565b915050806101200151805190602001208585604051610b10929190611897565b60405180910390201480156109fb575080516040805173ffffffffffffffffffffffffffffffffffffffff909216602083015201604051602081830303815290604052805190602001208787604051610b6a929190611897565b60405180910390201492505050610cb4565b7fd77cd343000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610c01575f610bd3886004818c611395565b810190610be09190611d7d565b92505050806101200151805190602001208585604051610b10929190611897565b7fd733bcea000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610c58575f610ae3886004818c611395565b7fd77cd343000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610caf575f610bd3886004818c611395565b5f9150505b9695505050505050565b6060610ccd8260048186611395565b810190610cda9190611e01565b949350505050565b610d766040518061014001604052805f815260200160608152602001606081526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f81526020015f81526020015f151581526020015f151581525090565b610d838260048186611395565b8101906101d79190611e5c565b5f601483511015610e27576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f496e76616c69642063616c6c546f206c656e6774683b2065787065637465642060448201527f6174206c65617374203230206279746573000000000000000000000000000000606482015260840160405180910390fd5b50602082015173ffffffffffffffffffffffffffffffffffffffff8281169116145b92915050565b5f5f83601f840112610e5f575f5ffd5b50813567ffffffffffffffff811115610e76575f5ffd5b602083019150836020828501011115610298575f5ffd5b5f5f60208385031215610e9e575f5ffd5b823567ffffffffffffffff811115610eb4575f5ffd5b610ec085828601610e4f565b90969095509350505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b5f82825180855260208501945060208160051b830101602085015f5b83811015611038577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403018852815173ffffffffffffffffffffffffffffffffffffffff815116845273ffffffffffffffffffffffffffffffffffffffff602082015116602085015273ffffffffffffffffffffffffffffffffffffffff60408201511660408501526060810151610fe6606086018273ffffffffffffffffffffffffffffffffffffffff169052565b506080810151608085015260a081015160e060a086015261100a60e0860182610ecc565b905060c0820151915061102160c086018315159052565b6020998a0199909450929092019150600101610f34565b50909695505050505050565b602081525f6101d76020830184610f18565b805182525f60208201516101406020850152611076610140850182610ecc565b90506040830151848203604086015261108f8282610ecc565b91505060608301516110b9606086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060808301516110e1608086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060a083015161110960a086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060c083015160c085015260e083015160e085015261010083015161113361010086018215159052565b5061012083015161114961012086018215159052565b509392505050565b604081525f6111636040830185611056565b82810360208401526111758185610f18565b95945050505050565b602081525f6101d76020830184611056565b73ffffffffffffffffffffffffffffffffffffffff811681146111b1575f5ffd5b50565b80356111bf81611190565b919050565b803580151581146111bf575f5ffd5b5f5f5f5f5f5f5f5f5f5f6101008b8d0312156111ed575f5ffd5b8a3567ffffffffffffffff811115611203575f5ffd5b61120f8d828e01610e4f565b909b5099505060208b013567ffffffffffffffff81111561122e575f5ffd5b61123a8d828e01610e4f565b90995097505060408b013561124e81611190565b955060608b013561125e81611190565b945060808b0135935060a08b0135925061127a60c08c016111c4565b915061128860e08c016111c4565b90509295989b9194979a5092959850565b60e081525f6112ab60e083018a610ecc565b73ffffffffffffffffffffffffffffffffffffffff988916602084015296909716604082015260608101949094526080840192909252151560a0830152151560c09091015292915050565b5f5f5f5f5f5f6060878903121561130b575f5ffd5b863567ffffffffffffffff811115611321575f5ffd5b61132d89828a01610e4f565b909750955050602087013567ffffffffffffffff81111561134c575f5ffd5b61135889828a01610e4f565b909550935050604087013567ffffffffffffffff811115611377575f5ffd5b61138389828a01610e4f565b979a9699509497509295939492505050565b5f5f858511156113a3575f5ffd5b838611156113af575f5ffd5b5050820193919092039150565b80357fffffffff00000000000000000000000000000000000000000000000000000000811690600484101561084a577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b60405160e0810167ffffffffffffffff8111828210171561147157611471611421565b60405290565b604051610140810167ffffffffffffffff8111828210171561147157611471611421565b6040516080810167ffffffffffffffff8111828210171561147157611471611421565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561150557611505611421565b604052919050565b5f82601f83011261151c575f5ffd5b8135602083015f5f67ffffffffffffffff84111561153c5761153c611421565b50601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200161156f816114be565b915050828152858383011115611583575f5ffd5b828260208301375f92810160200192909252509392505050565b5f60e082840312156115ad575f5ffd5b6115b561144e565b90506115c0826111b4565b81526115ce602083016111b4565b60208201526115df604083016111b4565b60408201526115f0606083016111b4565b60608201526080828101359082015260a082013567ffffffffffffffff811115611618575f5ffd5b6116248482850161150d565b60a08301525061163660c083016111c4565b60c082015292915050565b5f5f5f5f5f5f60c08789031215611656575f5ffd5b86359550602087013567ffffffffffffffff811115611673575f5ffd5b61167f89828a0161150d565b955050604087013567ffffffffffffffff81111561169b575f5ffd5b6116a789828a0161150d565b94505060608701356116b881611190565b92506080870135915060a087013567ffffffffffffffff8111156116da575f5ffd5b6116e689828a0161159d565b9150509295509295509295565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82601f83011261172f575f5ffd5b813567ffffffffffffffff81111561174957611749611421565b8060051b611759602082016114be565b91825260208185018101929081019086841115611774575f5ffd5b6020860192505b83831015610cb457823567ffffffffffffffff811115611799575f5ffd5b6117a8886020838a010161159d565b8352506020928301929091019061177b565b5f5f5f5f5f5f60c087890312156117cf575f5ffd5b86359550602087013567ffffffffffffffff8111156117ec575f5ffd5b6117f889828a0161150d565b955050604087013567ffffffffffffffff811115611814575f5ffd5b61182089828a0161150d565b945050606087013561183181611190565b92506080870135915060a087013567ffffffffffffffff811115611853575f5ffd5b6116e689828a01611720565b81810381811115610e49577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b818382375f9101908152919050565b5f82518060208501845e5f920191825250919050565b5f61014082840312156118cd575f5ffd5b6118d5611477565b823581529050602082013567ffffffffffffffff8111156118f4575f5ffd5b6119008482850161150d565b602083015250604082013567ffffffffffffffff81111561191f575f5ffd5b61192b8482850161150d565b60408301525061193d606083016111b4565b606082015261194e608083016111b4565b608082015261195f60a083016111b4565b60a082015260c0828101359082015260e0808301359082015261198561010083016111c4565b61010082015261199861012083016111c4565b61012082015292915050565b803563ffffffff811681146111bf575f5ffd5b5f604082840312156119c7575f5ffd5b6040805190810167ffffffffffffffff811182821017156119ea576119ea611421565b604052823581526020928301359281019290925250919050565b5f60a08284031215611a14575f5ffd5b611a1c61149b565b9050813561ffff81168114611a2f575f5ffd5b8152602082013567ffffffffffffffff811115611a4a575f5ffd5b820160e08185031215611a5b575f5ffd5b611a6361144e565b611a6c826119a4565b8152602082810135908201526040808301359082015260608083013590820152608082013567ffffffffffffffff811115611aa5575f5ffd5b611ab18682850161150d565b60808301525060a082013567ffffffffffffffff811115611ad0575f5ffd5b611adc8682850161150d565b60a08301525060c082013567ffffffffffffffff811115611afb575f5ffd5b611b078682850161150d565b60c083015250602083015250611b2083604084016119b7565b6040820152611b31608083016111b4565b606082015292915050565b5f5f60408385031215611b4d575f5ffd5b823567ffffffffffffffff811115611b63575f5ffd5b611b6f858286016118bc565b925050602083013567ffffffffffffffff811115611b8b575f5ffd5b611b9785828601611a04565b9150509250929050565b5f5f5f60608486031215611bb3575f5ffd5b833567ffffffffffffffff811115611bc9575f5ffd5b611bd5868287016118bc565b935050602084013567ffffffffffffffff811115611bf1575f5ffd5b611bfd86828701611720565b925050604084013567ffffffffffffffff811115611c19575f5ffd5b611c2586828701611a04565b9150509250925092565b803567ffffffffffffffff811681146111bf575f5ffd5b5f6101408284031215611c57575f5ffd5b611c5f611477565b9050611c6a826111b4565b8152611c78602083016111b4565b6020820152611c89604083016111b4565b604082015260608281013590820152611ca460808301611c2f565b6080820152611cb560a083016111b4565b60a0820152611cc660c083016119a4565b60c0820152611cd760e083016119a4565b60e0820152611ce961010083016119a4565b61010082015261012082013567ffffffffffffffff811115611d09575f5ffd5b611d158482850161150d565b6101208301525092915050565b5f5f60408385031215611d33575f5ffd5b823567ffffffffffffffff811115611d49575f5ffd5b611d55858286016118bc565b925050602083013567ffffffffffffffff811115611d71575f5ffd5b611b9785828601611c46565b5f5f5f60608486031215611d8f575f5ffd5b833567ffffffffffffffff811115611da5575f5ffd5b611db1868287016118bc565b935050602084013567ffffffffffffffff811115611dcd575f5ffd5b611dd986828701611720565b925050604084013567ffffffffffffffff811115611df5575f5ffd5b611c2586828701611c46565b5f5f60408385031215611e12575f5ffd5b823567ffffffffffffffff811115611e28575f5ffd5b611e34858286016118bc565b925050602083013567ffffffffffffffff811115611e50575f5ffd5b611b9785828601611720565b5f60208284031215611e6c575f5ffd5b813567ffffffffffffffff811115611e82575f5ffd5b610cda848285016118bc56fea2646970667358221220aefe2c52cccefe6069da9297f5170302ba180591accd53e85e4737acd28e145d64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "extractBridgeData";
        readonly inputs: readonly [{
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "bridgeData";
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
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "extractData";
        readonly inputs: readonly [{
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "bridgeData";
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
            readonly name: "swapData";
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
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "extractGenericSwapParameters";
        readonly inputs: readonly [{
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "sendingAssetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "receivingAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "extractMainParameters";
        readonly inputs: readonly [{
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "bridge";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "sendingAssetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
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
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "extractNonEVMAddress";
        readonly inputs: readonly [{
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "nonEVMAddress";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "extractSwapData";
        readonly inputs: readonly [{
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "swapData";
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
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "validateCalldata";
        readonly inputs: readonly [{
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "bridge";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "sendingAssetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
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
        readonly outputs: readonly [{
            readonly name: "isValid";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "validateDestinationCalldata";
        readonly inputs: readonly [{
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "callTo";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "dstCalldata";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "isValid";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "error";
        readonly name: "InvalidCallData";
        readonly inputs: readonly [];
    }];
    static createInterface(): CalldataVerificationFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CalldataVerificationFacet;
}
export {};
