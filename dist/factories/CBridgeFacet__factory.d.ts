import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { CBridgeFacet, CBridgeFacetInterface } from "../CBridgeFacet";
type CBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CBridgeFacet__factory extends ContractFactory {
    constructor(...args: CBridgeFacetConstructorParams);
    deploy(_cBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<CBridgeFacet>;
    getDeployTransaction(_cBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): CBridgeFacet;
    connect(signer: Signer): CBridgeFacet__factory;
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b5060405161203e38038061203e83398101604081905261002e9161003f565b6001600160a01b031660805261006c565b5f6020828403121561004f575f5ffd5b81516001600160a01b0381168114610065575f5ffd5b9392505050565b608051611fa66100985f395f818160dd0152818161093701528181610a320152610a5d0152611fa65ff3fe608060405260043610610033575f3560e01c80630d19e51914610037578063482c6a8514610058578063ae0b91e51461006b575b5f5ffd5b348015610042575f5ffd5b5061005661005136600461181f565b61007e565b005b610056610066366004611ad7565b61028f565b610056610079366004611b84565b6104bc565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146100c4576100c46106dc565b8573ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1614610149576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8673ffffffffffffffffffffffffffffffffffffffff168686604051610171929190611bd0565b5f604051808303815f865af19150503d805f81146101aa576040519150601f19603f3d011682016040523d82523d5f602084013e6101af565b606091505b505080915050806101ec576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff84161561020f5783610211565b335b905061021e85828561077b565b8073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167f9779662e766b5675e69e09303bc2f58ae30397b71b8021ab947defd27747b95f8560405161027d91815260200190565b60405180910390a35050505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161030a576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61031a3447611bdf565b905086806101000151610359576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610397576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886103ba8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103f1576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361042e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361046b576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61047f8a5f01518b60c001518b8b336107b0565b60c08b015261048e8a886108f2565b5047915050818111156104af576104af5f846104aa8585611bdf565b61077b565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610537576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6105473447611bdf565b90508480610100015115610587576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101200151156105c5576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866105e88160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561061f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361065c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610699576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106ab88608001518960c00151610bb3565b6106b588886108f2565b5047915050818111156106d1576106d15f846104aa8585611bdf565b50505f909155505050565b5f80357fffffffff000000000000000000000000000000000000000000000000000000001681527fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e6020818152604080842033855290915290912054600160ff909116151514610778576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b73ffffffffffffffffffffffffffffffffffffffff83166107a5576107a08282610c67565b505050565b6107a0838383610cd4565b5f828082036107eb576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f85856107f9600185611bdf565b81811061080857610808611c17565b905060200281019061081a9190611c44565b61082b906080810190606001611c80565b90505f61083782610d42565b905073ffffffffffffffffffffffffffffffffffffffff82166108615761085e3482611bdf565b90505b5f61086c8888610d8c565b90506108788888610e96565b6108858a89898985610f02565b5f8261089085610d42565b61089a9190611bdf565b9050898110156108e4576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b608082015173ffffffffffffffffffffffffffffffffffffffff16610a285760c082015160a083015160e084015173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001692633f2e5fc392909182906109726040880160208901611ca2565b61097f6020890189611cc9565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e089901b16815273ffffffffffffffffffffffffffffffffffffffff9095166004860152602485019390935267ffffffffffffffff918216604485015216606483015263ffffffff16608482015260a4015f604051808303818588803b158015610a0c575f5ffd5b505af1158015610a1e573d5f5f3e3d5ffd5b5050505050610b78565b610a5b82608001517f00000000000000000000000000000000000000000000000000000000000000008460c001516112ad565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a5977fbb8360a0015184608001518560c001518660e00151866020016020810190610abe9190611ca2565b610acb6020890189611cc9565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e089901b16815273ffffffffffffffffffffffffffffffffffffffff9687166004820152959094166024860152604485019290925267ffffffffffffffff908116606485015216608483015263ffffffff1660a482015260c4015f604051808303815f87803b158015610b61575f5ffd5b505af1158015610b73573d5f5f3e3d5ffd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f182604051610ba79190611d38565b60405180910390a15050565b805f03610bec576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610c455780341015610c41576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610c4173ffffffffffffffffffffffffffffffffffffffff83163330846112d9565b73ffffffffffffffffffffffffffffffffffffffff8216610cb4576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c4173ffffffffffffffffffffffffffffffffffffffff831682611331565b73ffffffffffffffffffffffffffffffffffffffff8216610d21576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107a073ffffffffffffffffffffffffffffffffffffffff8416838361134a565b5f73ffffffffffffffffffffffffffffffffffffffff821615610d8457610d7f73ffffffffffffffffffffffffffffffffffffffff831630611393565b610d86565b475b92915050565b6060815f8167ffffffffffffffff811115610da957610da96118ca565b604051908082528060200260200182016040528015610dd2578160200160208202803683370190505b5090505f805b83811015610e8b57868682818110610df257610df2611c17565b9050602002810190610e049190611c44565b610e15906080810190606001611c80565b9150610e2082610d42565b838281518110610e3257610e32611c17565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610e835734838281518110610e6b57610e6b611c17565b60200260200101818151610e7f9190611bdf565b9052505b600101610dd8565b509095945050505050565b5f5b818110156107a05736838383818110610eb357610eb3611c17565b9050602002810190610ec59190611c44565b9050610ed760e0820160c08301611e4b565b15610ef957610ef9610eef6060830160408401611c80565b8260800135610bb3565b50600101610e98565b8383838382600181146111c9575f8585610f1d600185611bdf565b818110610f2c57610f2c611c17565b9050602002810190610f3e9190611c44565b610f4f906080810190606001611c80565b90505f89815b818110156110f657368d8d83818110610f7057610f70611c17565b9050602002810190610f829190611c44565b9050610fb1610f976060830160408401611c80565b73ffffffffffffffffffffffffffffffffffffffff161590565b806110135750611013610fca6040830160208401611c80565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561102a575061102a610fca6020830183611c80565b80156110ad57506110ad61104160a0830183611e64565b61104f916004915f91611ecc565b61105891611ef3565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6110e3576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110ed8f826113c6565b50600101610f55565b505f90505b611106600185611bdf565b8110156111c1575f88888381811061112057611120611c17565b90506020028101906111329190611c44565b611143906080810190606001611c80565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146111b85785828151811061118a5761118a611c17565b602002602001015161119b82610d42565b6111a59190611bdf565b925082156111b8576111b881888561077b565b506001016110fb565b5050506112a1565b875f5b8181101561129e57368b8b838181106111e7576111e7611c17565b90506020028101906111f99190611c44565b905061120e610f976060830160408401611c80565b806112275750611227610fca6040830160208401611c80565b801561123e575061123e610fca6020830183611c80565b8015611255575061125561104160a0830183611e64565b61128b576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6112958d826113c6565b506001016111cc565b50505b50505050505050505050565b6107a08383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611639565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661132457637939f4245f526004601cfd5b5f60605260405250505050565b5f385f3884865af1610c415763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f5114171661138a576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6113de6113d66020830183611c80565b6017903b1190565b611414576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611453576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f611467610f976060850160408601611c80565b611471575f611477565b82608001355b90505f61149261148d6080860160608701611c80565b610d42565b9050815f036114c8576114c86114ae6060860160408701611c80565b6114be6040870160208801611c80565b86608001356112ad565b5f806114d76020870187611c80565b73ffffffffffffffffffffffffffffffffffffffff16846114fb60a0890189611e64565b604051611509929190611bd0565b5f6040518083038185875af1925050503d805f8114611543576040519150601f19603f3d011682016040523d82523d5f602084013e611548565b606091505b50915091508161155b5761155b81611766565b5f61156f61148d6080890160608a01611c80565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886115a060208a018a611c80565b6115b060608b0160408c01611c80565b6115c060808c0160608d01611c80565b8b608001358987116115d257866115dc565b6115dc8a88611bdf565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156117605773ffffffffffffffffffffffffffffffffffffffff83166116a2576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611715573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906117399190611f59565b10156117605761176073ffffffffffffffffffffffffffffffffffffffff85168483611770565b50505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f5114171661138a575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661138a57633e3f8f735f526004601cfd5b73ffffffffffffffffffffffffffffffffffffffff81168114610778575f5ffd5b803561181a816117ee565b919050565b5f5f5f5f5f5f60a08789031215611834575f5ffd5b863561183f816117ee565b9550602087013567ffffffffffffffff81111561185a575f5ffd5b8701601f8101891361186a575f5ffd5b803567ffffffffffffffff811115611880575f5ffd5b896020828401011115611891575f5ffd5b602091909101955093506118a76040880161180f565b92506118b56060880161180f565b95989497509295919493608090920135925050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff8111828210171561191b5761191b6118ca565b60405290565b5f82601f830112611930575f5ffd5b813567ffffffffffffffff81111561194a5761194a6118ca565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611997576119976118ca565b6040528181528382016020018510156119ae575f5ffd5b816020850160208301375f918101602001919091529392505050565b8035801515811461181a575f5ffd5b5f61014082840312156119ea575f5ffd5b6119f26118f7565b823581529050602082013567ffffffffffffffff811115611a11575f5ffd5b611a1d84828501611921565b602083015250604082013567ffffffffffffffff811115611a3c575f5ffd5b611a4884828501611921565b604083015250611a5a6060830161180f565b6060820152611a6b6080830161180f565b6080820152611a7c60a0830161180f565b60a082015260c0828101359082015260e08083013590820152611aa261010083016119ca565b610100820152611ab561012083016119ca565b61012082015292915050565b5f60408284031215611ad1575f5ffd5b50919050565b5f5f5f5f60808587031215611aea575f5ffd5b843567ffffffffffffffff811115611b00575f5ffd5b611b0c878288016119d9565b945050602085013567ffffffffffffffff811115611b28575f5ffd5b8501601f81018713611b38575f5ffd5b803567ffffffffffffffff811115611b4e575f5ffd5b8760208260051b8401011115611b62575f5ffd5b60209190910193509150611b798660408701611ac1565b905092959194509250565b5f5f60608385031215611b95575f5ffd5b823567ffffffffffffffff811115611bab575f5ffd5b611bb7858286016119d9565b925050611bc78460208501611ac1565b90509250929050565b818382375f9101908152919050565b81810381811115610d86577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611c76575f5ffd5b9190910192915050565b5f60208284031215611c90575f5ffd5b8135611c9b816117ee565b9392505050565b5f60208284031215611cb2575f5ffd5b813567ffffffffffffffff81168114611c9b575f5ffd5b5f60208284031215611cd9575f5ffd5b813563ffffffff81168114611c9b575f5ffd5b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f60208301516101406040840152611d5f610160840182611cec565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611d9a8282611cec565b9150506060840151611dc4608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611e3361012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215611e5b575f5ffd5b611c9b826119ca565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611e97575f5ffd5b83018035915067ffffffffffffffff821115611eb1575f5ffd5b602001915036819003821315611ec5575f5ffd5b9250929050565b5f5f85851115611eda575f5ffd5b83861115611ee6575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611f52577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f60208284031215611f69575f5ffd5b505191905056fea2646970667358221220874d736d864510a3ac21ccc54c0643c8cce585661dd03b2714e6222e8987bef464736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_cBridge";
            readonly type: "address";
            readonly internalType: "contract ICBridge";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaCBridge";
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
            readonly name: "_cBridgeData";
            readonly type: "tuple";
            readonly internalType: "struct CBridgeFacet.CBridgeData";
            readonly components: readonly [{
                readonly name: "maxSlippage";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "nonce";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaCBridge";
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
            readonly name: "_cBridgeData";
            readonly type: "tuple";
            readonly internalType: "struct CBridgeFacet.CBridgeData";
            readonly components: readonly [{
                readonly name: "maxSlippage";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "nonce";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "triggerRefund";
        readonly inputs: readonly [{
            readonly name: "_callTo";
            readonly type: "address";
            readonly internalType: "address payable";
        }, {
            readonly name: "_callData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_assetAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly name: "CBridgeRefund";
        readonly inputs: readonly [{
            readonly name: "_assetAddress";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
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
        readonly name: "ExternalCallFailed";
        readonly inputs: readonly [];
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
    }, {
        readonly type: "error";
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }];
    static createInterface(): CBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CBridgeFacet;
}
export {};
