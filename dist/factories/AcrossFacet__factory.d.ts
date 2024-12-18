import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AcrossFacet, AcrossFacetInterface } from "../AcrossFacet";
declare type AcrossFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AcrossFacet__factory extends ContractFactory {
    constructor(...args: AcrossFacetConstructorParams);
    deploy(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AcrossFacet>;
    getDeployTransaction(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AcrossFacet;
    connect(signer: Signer): AcrossFacet__factory;
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b50604051620027c2380380620027c2833981016040819052620000349162000065565b6001600160a01b039182166080521660a052620000a4565b6001600160a01b03811681146200006257600080fd5b50565b600080604083850312156200007957600080fd5b825162000086816200004c565b602084015190925062000099816200004c565b809150509250929050565b60805160a0516126ea620000d8600039600061069c01526000818161067101528181610752015261077d01526126ea6000f3fe6080604052600436106100295760003560e01c80631fd8010c1461002e5780633a3f733214610043575b600080fd5b61004161003c3660046120f3565b610056565b005b610041610051366004612157565b61027f565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e23447612216565b9050846101078160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561013e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361017c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101b9576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156101f7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610235576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024788608001518960c001516104ac565b610251888861062c565b5047915050818111156102735761027360008461026e8585612216565b610892565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102fa576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061030b3447612216565b90508680610100015161034a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610388576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886103ab8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103e2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610420576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361045d576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104728a600001518b60c001518b8b336108c3565b60c08b01526104818a8861062c565b50479150508181111561049e5761049e60008461026e8585612216565b505060009091555050505050565b806000036104e6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661053f578034101561053b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156105ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105d09190612250565b90508181101561061b576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61062783333085610a06565b505050565b608082015173ffffffffffffffffffffffffffffffffffffffff166107485760c082015160a083015160e084015173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001692631186ec339290917f00000000000000000000000000000000000000000000000000000000000000009083906106cb6020890189612269565b6106db60408a0160208b01612293565b6106e860408b018b6122b9565b8b606001356040518b63ffffffff1660e01b815260040161071199989796959493929190612325565b6000604051808303818588803b15801561072a57600080fd5b505af115801561073e573d6000803e3d6000fd5b5050505050610857565b61077b82608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610c20565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16631186ec338360a0015184608001518560c001518660e001518660000160208101906107de9190612269565b6107ee6040890160208a01612293565b6107fb60408a018a6122b9565b8a606001356040518a63ffffffff1660e01b815260040161082499989796959493929190612325565b600060405180830381600087803b15801561083e57600080fd5b505af1158015610852573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516108869190612438565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316156108b957610627838383610d63565b6106278282610ee5565b6000828082036108ff576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561090e600185612216565b81811061091d5761091d61254b565b905060200281019061092f919061257a565b6109409060808101906060016125b8565b9050600061094d8261100f565b905073ffffffffffffffffffffffffffffffffffffffff8216610977576109743482612216565b90505b600061098388886110c8565b905061098f88886111d4565b61099c8a89898985611241565b6000826109a88561100f565b6109b29190612216565b9050898110156109f8576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b905260248101829052604401610612565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416610a53576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610aa0576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610b11573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b359190612250565b9050610b43828686866115f3565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610bb3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bd79190612250565b610be19190612216565b14610c18576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610c4057505050565b73ffffffffffffffffffffffffffffffffffffffff8216610c8d576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610d02573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d269190612250565b101561062757610d38838360006116cf565b61062783837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6116cf565b73ffffffffffffffffffffffffffffffffffffffff8316610db0576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610dfd576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610e6a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e8e9190612250565b905080821115610ed4576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610612565b610edf848484611851565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610f32576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610f75576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610612565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610fcf576040519150601f19603f3d011682016040523d82523d6000602084013e610fd4565b606091505b5050905080610627576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff8216156110c0576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015611097573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110bb9190612250565b6110c2565b475b92915050565b60608160008167ffffffffffffffff8111156110e6576110e6611ead565b60405190808252806020026020018201604052801561110f578160200160208202803683370190505b5090506000805b838110156111c9578686828181106111305761113061254b565b9050602002810190611142919061257a565b6111539060808101906060016125b8565b915061115e8261100f565b8382815181106111705761117061254b565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166111c157348382815181106111a9576111a961254b565b602002602001018181516111bd9190612216565b9052505b600101611116565b509095945050505050565b60005b8181101561062757368383838181106111f2576111f261254b565b9050602002810190611204919061257a565b905061121660e0820160c083016125d3565b156112385761123861122e60608301604084016125b8565b82608001356104ac565b506001016111d7565b83838383826001811461150e576000858561125d600185612216565b81811061126c5761126c61254b565b905060200281019061127e919061257a565b61128f9060808101906060016125b8565b9050600089815b8181101561143a57368d8d838181106112b1576112b161254b565b90506020028101906112c3919061257a565b90506112f26112d860608301604084016125b8565b73ffffffffffffffffffffffffffffffffffffffff161590565b80611355575061135561130b60408301602084016125b8565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561136c575061136c61130b60208301836125b8565b80156113f157506113f161138360a08301836122b9565b611392916004916000916125f0565b61139b9161261a565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611427576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6114318f826118a7565b50600101611296565b505060005b61144a600185612216565b8110156115065760008888838181106114655761146561254b565b9050602002810190611477919061257a565b6114889060808101906060016125b8565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146114fd578582815181106114cf576114cf61254b565b60200260200101516114e08261100f565b6114ea9190612216565b925082156114fd576114fd818885610892565b5060010161143f565b5050506115e7565b8760005b818110156115e457368b8b8381811061152d5761152d61254b565b905060200281019061153f919061257a565b90506115546112d860608301604084016125b8565b8061156d575061156d61130b60408301602084016125b8565b8015611584575061158461130b60208301836125b8565b801561159b575061159b61138360a08301836122b9565b6115d1576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115db8d826118a7565b50600101611512565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610edf9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611b85565b80158061176f57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611749573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061176d9190612250565b155b6117fb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610612565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106279084907f095ea7b3000000000000000000000000000000000000000000000000000000009060640161164d565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106279084907fa9059cbb000000000000000000000000000000000000000000000000000000009060640161164d565b6118bd6118b760208301836125b8565b3b151590565b6118f3576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611933576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006119486112d860608501604086016125b8565b611953576000611959565b82608001355b9050600061197561197060608601604087016125b8565b61100f565b9050600061198c61197060808701606088016125b8565b9050826000036119c3576119c36119a960608701604088016125b8565b6119b960408801602089016125b8565b8760800135610c20565b8460800135821015611a0e576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610612565b600080611a1e60208801886125b8565b73ffffffffffffffffffffffffffffffffffffffff1685611a4260a08a018a6122b9565b604051611a50929190612662565b60006040518083038185875af1925050503d8060008114611a8d576040519150601f19603f3d011682016040523d82523d6000602084013e611a92565b606091505b509150915081611aa557611aa581611c94565b6000611aba61197060808a0160608b016125b8565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611aeb60208b018b6125b8565b611afb60608c0160408d016125b8565b611b0b60808d0160608e016125b8565b8c60800135898711611b1d5786611b27565b611b278a88612216565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611be7826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611c9e9092919063ffffffff16565b9050805160001480611c08575080806020019051810190611c089190612672565b610627576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610612565b8051602082018181fd5b6060611cad8484600085611cb5565b949350505050565b606082471015611d47576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610612565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611d70919061268f565b60006040518083038185875af1925050503d8060008114611dad576040519150601f19603f3d011682016040523d82523d6000602084013e611db2565b606091505b5091509150611dc387838387611dce565b979650505050505050565b60608315611e64578251600003611e5d5773ffffffffffffffffffffffffffffffffffffffff85163b611e5d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610612565b5081611cad565b611cad8383815115611e795781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061291906126a1565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611f0057611f00611ead565b60405290565b600082601f830112611f1757600080fd5b813567ffffffffffffffff80821115611f3257611f32611ead565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611f7857611f78611ead565b81604052838152866020858801011115611f9157600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611fd557600080fd5b919050565b8015158114611fe857600080fd5b50565b8035611fd581611fda565b6000610140828403121561200957600080fd5b612011611edc565b905081358152602082013567ffffffffffffffff8082111561203257600080fd5b61203e85838601611f06565b6020840152604084013591508082111561205757600080fd5b5061206484828501611f06565b60408301525061207660608301611fb1565b606082015261208760808301611fb1565b608082015261209860a08301611fb1565b60a082015260c082013560c082015260e082013560e08201526101006120bf818401611feb565b908201526101206120d1838201611feb565b9082015292915050565b6000608082840312156120ed57600080fd5b50919050565b6000806040838503121561210657600080fd5b823567ffffffffffffffff8082111561211e57600080fd5b61212a86838701611ff6565b9350602085013591508082111561214057600080fd5b5061214d858286016120db565b9150509250929050565b6000806000806060858703121561216d57600080fd5b843567ffffffffffffffff8082111561218557600080fd5b61219188838901611ff6565b955060208701359150808211156121a757600080fd5b818701915087601f8301126121bb57600080fd5b8135818111156121ca57600080fd5b8860208260051b85010111156121df57600080fd5b6020830195508094505060408701359150808211156121fd57600080fd5b5061220a878288016120db565b91505092959194509250565b818103818111156110c2577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006020828403121561226257600080fd5b5051919050565b60006020828403121561227b57600080fd5b81358060070b811461228c57600080fd5b9392505050565b6000602082840312156122a557600080fd5b813563ffffffff8116811461228c57600080fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126122ee57600080fd5b83018035915067ffffffffffffffff82111561230957600080fd5b60200191503681900382131561231e57600080fd5b9250929050565b600061010073ffffffffffffffffffffffffffffffffffffffff808d168452808c166020850152508960408401528860608401528760070b608084015263ffffffff871660a08401528060c0840152848184015250610120848682850137600083860182015260e083019390935250601f9092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01690910101979650505050505050565b60005b838110156123e55781810151838201526020016123cd565b50506000910152565b600081518084526124068160208601602086016123ca565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526124616101608501836123ee565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261249c83826123ee565b92505060608501516124c6608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206125398187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126125ae57600080fd5b9190910192915050565b6000602082840312156125ca57600080fd5b61228c82611fb1565b6000602082840312156125e557600080fd5b813561228c81611fda565b6000808585111561260057600080fd5b8386111561260d57600080fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561265a5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b60006020828403121561268457600080fd5b815161228c81611fda565b600082516125ae8184602087016123ca565b60208152600061228c60208301846123ee56fea2646970667358221220f64734879c6bdbde492fedbb529b6be5c904f58fd3298af900c447b072be9cb064736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_spokePool";
            readonly type: "address";
            readonly internalType: "contract IAcrossSpokePool";
        }, {
            readonly name: "_wrappedNative";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcross";
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
            readonly name: "_acrossData";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacet.AcrossData";
            readonly components: readonly [{
                readonly name: "relayerFeePct";
                readonly type: "int64";
                readonly internalType: "int64";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "maxCount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaAcross";
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
            readonly name: "_acrossData";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacet.AcrossData";
            readonly components: readonly [{
                readonly name: "relayerFeePct";
                readonly type: "int64";
                readonly internalType: "int64";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "maxCount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
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
        readonly name: "NativeAssetTransferFailed";
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
        readonly name: "NoTransferToNullAddress";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAnERC20Token";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): AcrossFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AcrossFacet;
}
export {};
