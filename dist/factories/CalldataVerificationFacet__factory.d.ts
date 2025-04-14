import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { CalldataVerificationFacet, CalldataVerificationFacetInterface } from "../CalldataVerificationFacet";
declare type CalldataVerificationFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
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
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506121b48061001c5f395ff3fe608060405234801561000f575f5ffd5b5060043610610085575f3560e01c8063d53482cf11610058578063d53482cf1461014e578063df1c3a5b14610171578063ee0aa32014610192578063f58ae2ce146101b8575f5ffd5b8063070e81f114610089578063103c5200146100b25780637f99d7af146100d3578063c318eeda146100f3575b5f5ffd5b61009c610097366004610fc0565b6101cb565b6040516100a99190611177565b60405180910390f35b6100c56100c0366004610fc0565b6101de565b6040516100a9929190611284565b6100e66100e1366004610fc0565b61029f565b6040516100a991906112b1565b610106610101366004610fc0565b61033d565b6040805173ffffffffffffffffffffffffffffffffffffffff96871681526020810195909552928516928401929092529092166060820152608081019190915260a0016100a9565b61016161015c366004611306565b6105dd565b60405190151581526020016100a9565b61018461017f366004610fc0565b6107d9565b6040519081526020016100a9565b6101a56101a0366004610fc0565b610851565b6040516100a997969594939291906113cc565b6101616101c6366004611429565b610905565b60606101d78383610df1565b9392505050565b6102726040518061014001604052805f815260200160608152602001606081526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f81526020015f81526020015f151581526020015f151581525090565b606061027e8484610e15565b915081610100015115610298576102958484610df1565b90505b9250929050565b6103336040518061014001604052805f815260200160608152602001606081526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f81526020015f81526020015f151581526020015f151581525090565b6101d78383610e15565b5f808080806101e4861161037d576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60605f61038d6004828a8c6114c8565b610396916114ef565b90507fffffffff0000000000000000000000000000000000000000000000000000000081167f4666fc8000000000000000000000000000000000000000000000000000000000148061042957507fffffffff0000000000000000000000000000000000000000000000000000000081167f733214a300000000000000000000000000000000000000000000000000000000145b8061047557507fffffffff0000000000000000000000000000000000000000000000000000000081167faf7060fd00000000000000000000000000000000000000000000000000000000145b1561053f5760408051600180825281830190925290816020015b6040805160e0810182525f808252602080830182905292820181905260608083018290526080830182905260a083015260c082015282527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90920191018161048f579050509150610503886004818c6114c8565b8101906105109190611797565b8751929550909350915085905f9061052a5761052a611849565b60209081029190910101529095509250610564565b61054c886004818c6114c8565b8101906105599190611910565b919950965094505050505b815f8151811061057657610576611849565b6020026020010151604001519650815f8151811061059657610596611849565b602002602001015160800151955081600183516105b391906119b5565b815181106105c3576105c3611849565b602002602001015160600151935050509295509295909350565b5f5f6105e98c8c610e15565b90505f8a8a6040516020016105ff9291906119ed565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815282825280516020918201205f8452908301918290529151902090915081148061067c575080826020015160405160200161066491906119fc565b60405160208183030381529060405280519060200120145b80156106d6575073ffffffffffffffffffffffffffffffffffffffff808a1614806106d657508873ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff16145b8015610730575073ffffffffffffffffffffffffffffffffffffffff808916148061073057508773ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff16145b801561076857507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8714806107685750868260c00151145b80156107a057507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8614806107a05750858260e00151145b80156107b457508415158261010001511515145b80156107c857508315158261012001511515145b9d9c50505050505050505050505050565b5f5f83838080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152509293506108209250869150859050610e15565b61010001511561083c576064810151810160240151915061084a565b604481015181016024015191505b5092915050565b60605f5f5f5f5f5f5f6108648a8a610e15565b9050806101000151156108c4575f61087c8b8b610df1565b9050805f8151811061089057610890611849565b6020026020010151604001519750805f815181106108b0576108b0611849565b6020026020010151608001519550506108d3565b806080015196508060c0015194505b602081015160a082015160e083015161010084015161012090940151929d999c50909a50959850949690955092505050565b5f80610914600482898b6114c8565b61091d916114ef565b90507feb2acf89000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610a04575f610976886004818c6114c8565b8101906109839190611c92565b915050806020015160a001518051906020012085856040516109a69291906119ed565b60405180910390201480156109fb57506109fb87878080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152505050506020838101510151610ec3565b92505050610de7565b7f59fef59a000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610a8c575f610a5b886004818c6114c8565b810190610a689190611cf7565b92505050806020015160a001518051906020012085856040516109a69291906119ed565b7ffaf6a213000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610b4d575f610ae3886004818c6114c8565b810190610af09190611e57565b9150508060600151805190602001208585604051610b0f9291906119ed565b60405180910390201480156109fb57508060400151805190602001208787604051610b3b9291906119ed565b60405180910390201492505050610de7565b7f4f93ad26000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610bd1575f610ba4886004818c6114c8565b810190610bb19190611eb2565b925050508060600151805190602001208585604051610b0f9291906119ed565b7fd733bcea000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610caf575f610c28886004818c6114c8565b810190610c359190612012565b915050806101200151805190602001208585604051610c559291906119ed565b60405180910390201480156109fb575080516040805173ffffffffffffffffffffffffffffffffffffffff909216602083015201604051602081830303815290604052805190602001208787604051610b3b9291906119ed565b7fd77cd343000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610d34575f610d06886004818c6114c8565b810190610d13919061206d565b92505050806101200151805190602001208585604051610c559291906119ed565b7fd733bcea000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610d8b575f610c28886004818c6114c8565b7fd77cd343000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610de2575f610d06886004818c6114c8565b5f9150505b9695505050505050565b6060610e0082600481866114c8565b810190610e0d91906120f1565b949350505050565b610ea96040518061014001604052805f815260200160608152602001606081526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f81526020015f81526020015f151581526020015f151581525090565b610eb682600481866114c8565b8101906101d7919061214c565b5f601483511015610f5a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f496e76616c69642063616c6c546f206c656e6774683b2065787065637465642060448201527f6174206c65617374203230206279746573000000000000000000000000000000606482015260840160405180910390fd5b50602082015173ffffffffffffffffffffffffffffffffffffffff8281169116145b92915050565b5f5f83601f840112610f92575f5ffd5b50813567ffffffffffffffff811115610fa9575f5ffd5b602083019150836020828501011115610298575f5ffd5b5f5f60208385031215610fd1575f5ffd5b823567ffffffffffffffff811115610fe7575f5ffd5b610ff385828601610f82565b90969095509350505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b5f82825180855260208501945060208160051b830101602085015f5b8381101561116b577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403018852815173ffffffffffffffffffffffffffffffffffffffff815116845273ffffffffffffffffffffffffffffffffffffffff602082015116602085015273ffffffffffffffffffffffffffffffffffffffff60408201511660408501526060810151611119606086018273ffffffffffffffffffffffffffffffffffffffff169052565b506080810151608085015260a081015160e060a086015261113d60e0860182610fff565b905060c0820151915061115460c086018315159052565b6020998a0199909450929092019150600101611067565b50909695505050505050565b602081525f6101d7602083018461104b565b805182525f602082015161014060208501526111a9610140850182610fff565b9050604083015184820360408601526111c28282610fff565b91505060608301516111ec606086018273ffffffffffffffffffffffffffffffffffffffff169052565b506080830151611214608086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060a083015161123c60a086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060c083015160c085015260e083015160e085015261010083015161126661010086018215159052565b5061012083015161127c61012086018215159052565b509392505050565b604081525f6112966040830185611189565b82810360208401526112a8818561104b565b95945050505050565b602081525f6101d76020830184611189565b73ffffffffffffffffffffffffffffffffffffffff811681146112e4575f5ffd5b50565b80356112f2816112c3565b919050565b803580151581146112f2575f5ffd5b5f5f5f5f5f5f5f5f5f5f6101008b8d031215611320575f5ffd5b8a3567ffffffffffffffff811115611336575f5ffd5b6113428d828e01610f82565b909b5099505060208b013567ffffffffffffffff811115611361575f5ffd5b61136d8d828e01610f82565b90995097505060408b0135611381816112c3565b955060608b0135611391816112c3565b945060808b0135935060a08b013592506113ad60c08c016112f7565b91506113bb60e08c016112f7565b90509295989b9194979a5092959850565b60e081525f6113de60e083018a610fff565b73ffffffffffffffffffffffffffffffffffffffff988916602084015296909716604082015260608101949094526080840192909252151560a0830152151560c09091015292915050565b5f5f5f5f5f5f6060878903121561143e575f5ffd5b863567ffffffffffffffff811115611454575f5ffd5b61146089828a01610f82565b909750955050602087013567ffffffffffffffff81111561147f575f5ffd5b61148b89828a01610f82565b909550935050604087013567ffffffffffffffff8111156114aa575f5ffd5b6114b689828a01610f82565b979a9699509497509295939492505050565b5f5f858511156114d6575f5ffd5b838611156114e2575f5ffd5b5050820193919092039150565b80357fffffffff00000000000000000000000000000000000000000000000000000000811690600484101561084a577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b60405160e0810167ffffffffffffffff811182821017156115a4576115a4611554565b60405290565b604051610140810167ffffffffffffffff811182821017156115a4576115a4611554565b6040516080810167ffffffffffffffff811182821017156115a4576115a4611554565b60405160c0810167ffffffffffffffff811182821017156115a4576115a4611554565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561165b5761165b611554565b604052919050565b5f82601f830112611672575f5ffd5b8135602083015f5f67ffffffffffffffff84111561169257611692611554565b50601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0166020016116c581611614565b9150508281528583830111156116d9575f5ffd5b828260208301375f92810160200192909252509392505050565b5f60e08284031215611703575f5ffd5b61170b611581565b9050611716826112e7565b8152611724602083016112e7565b6020820152611735604083016112e7565b6040820152611746606083016112e7565b60608201526080828101359082015260a082013567ffffffffffffffff81111561176e575f5ffd5b61177a84828501611663565b60a08301525061178c60c083016112f7565b60c082015292915050565b5f5f5f5f5f5f60c087890312156117ac575f5ffd5b86359550602087013567ffffffffffffffff8111156117c9575f5ffd5b6117d589828a01611663565b955050604087013567ffffffffffffffff8111156117f1575f5ffd5b6117fd89828a01611663565b945050606087013561180e816112c3565b92506080870135915060a087013567ffffffffffffffff811115611830575f5ffd5b61183c89828a016116f3565b9150509295509295509295565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82601f830112611885575f5ffd5b813567ffffffffffffffff81111561189f5761189f611554565b8060051b6118af60208201611614565b918252602081850181019290810190868411156118ca575f5ffd5b6020860192505b83831015610de757823567ffffffffffffffff8111156118ef575f5ffd5b6118fe886020838a01016116f3565b835250602092830192909101906118d1565b5f5f5f5f5f5f60c08789031215611925575f5ffd5b86359550602087013567ffffffffffffffff811115611942575f5ffd5b61194e89828a01611663565b955050604087013567ffffffffffffffff81111561196a575f5ffd5b61197689828a01611663565b9450506060870135611987816112c3565b92506080870135915060a087013567ffffffffffffffff8111156119a9575f5ffd5b61183c89828a01611876565b81810381811115610f7c577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b818382375f9101908152919050565b5f82518060208501845e5f920191825250919050565b5f6101408284031215611a23575f5ffd5b611a2b6115aa565b823581529050602082013567ffffffffffffffff811115611a4a575f5ffd5b611a5684828501611663565b602083015250604082013567ffffffffffffffff811115611a75575f5ffd5b611a8184828501611663565b604083015250611a93606083016112e7565b6060820152611aa4608083016112e7565b6080820152611ab560a083016112e7565b60a082015260c0828101359082015260e08083013590820152611adb61010083016112f7565b610100820152611aee61012083016112f7565b61012082015292915050565b803563ffffffff811681146112f2575f5ffd5b5f60408284031215611b1d575f5ffd5b6040805190810167ffffffffffffffff81118282101715611b4057611b40611554565b604052823581526020928301359281019290925250919050565b5f60a08284031215611b6a575f5ffd5b611b726115ce565b9050813561ffff81168114611b85575f5ffd5b8152602082013567ffffffffffffffff811115611ba0575f5ffd5b820160e08185031215611bb1575f5ffd5b611bb9611581565b611bc282611afa565b8152602082810135908201526040808301359082015260608083013590820152608082013567ffffffffffffffff811115611bfb575f5ffd5b611c0786828501611663565b60808301525060a082013567ffffffffffffffff811115611c26575f5ffd5b611c3286828501611663565b60a08301525060c082013567ffffffffffffffff811115611c51575f5ffd5b611c5d86828501611663565b60c083015250602083015250611c768360408401611b0d565b6040820152611c87608083016112e7565b606082015292915050565b5f5f60408385031215611ca3575f5ffd5b823567ffffffffffffffff811115611cb9575f5ffd5b611cc585828601611a12565b925050602083013567ffffffffffffffff811115611ce1575f5ffd5b611ced85828601611b5a565b9150509250929050565b5f5f5f60608486031215611d09575f5ffd5b833567ffffffffffffffff811115611d1f575f5ffd5b611d2b86828701611a12565b935050602084013567ffffffffffffffff811115611d47575f5ffd5b611d5386828701611876565b925050604084013567ffffffffffffffff811115611d6f575f5ffd5b611d7b86828701611b5a565b9150509250925092565b803567ffffffffffffffff811681146112f2575f5ffd5b8035600781106112f2575f5ffd5b5f60c08284031215611dba575f5ffd5b611dc26115f1565b9050611dcd82611afa565b8152611ddb60208301611d85565b6020820152604082013567ffffffffffffffff811115611df9575f5ffd5b611e0584828501611663565b604083015250606082013567ffffffffffffffff811115611e24575f5ffd5b611e3084828501611663565b60608301525060808281013590820152611e4c60a08301611d9c565b60a082015292915050565b5f5f60408385031215611e68575f5ffd5b823567ffffffffffffffff811115611e7e575f5ffd5b611e8a85828601611a12565b925050602083013567ffffffffffffffff811115611ea6575f5ffd5b611ced85828601611daa565b5f5f5f60608486031215611ec4575f5ffd5b833567ffffffffffffffff811115611eda575f5ffd5b611ee686828701611a12565b935050602084013567ffffffffffffffff811115611f02575f5ffd5b611f0e86828701611876565b925050604084013567ffffffffffffffff811115611f2a575f5ffd5b611d7b86828701611daa565b5f6101408284031215611f47575f5ffd5b611f4f6115aa565b9050611f5a826112e7565b8152611f68602083016112e7565b6020820152611f79604083016112e7565b604082015260608281013590820152611f9460808301611d85565b6080820152611fa560a083016112e7565b60a0820152611fb660c08301611afa565b60c0820152611fc760e08301611afa565b60e0820152611fd96101008301611afa565b61010082015261012082013567ffffffffffffffff811115611ff9575f5ffd5b61200584828501611663565b6101208301525092915050565b5f5f60408385031215612023575f5ffd5b823567ffffffffffffffff811115612039575f5ffd5b61204585828601611a12565b925050602083013567ffffffffffffffff811115612061575f5ffd5b611ced85828601611f36565b5f5f5f6060848603121561207f575f5ffd5b833567ffffffffffffffff811115612095575f5ffd5b6120a186828701611a12565b935050602084013567ffffffffffffffff8111156120bd575f5ffd5b6120c986828701611876565b925050604084013567ffffffffffffffff8111156120e5575f5ffd5b611d7b86828701611f36565b5f5f60408385031215612102575f5ffd5b823567ffffffffffffffff811115612118575f5ffd5b61212485828601611a12565b925050602083013567ffffffffffffffff811115612140575f5ffd5b611ced85828601611876565b5f6020828403121561215c575f5ffd5b813567ffffffffffffffff811115612172575f5ffd5b610e0d84828501611a1256fea2646970667358221220e5153605ec522f6a0c09c6e524942dd9b6626947dffa573cee0f307859b0dfa064736f6c634300081d0033";
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
