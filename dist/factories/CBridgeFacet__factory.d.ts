import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { CBridgeFacet, CBridgeFacetInterface } from "../CBridgeFacet";
declare type CBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
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
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b506040516121c93803806121c983398101604081905261002e9161003f565b6001600160a01b031660805261006c565b5f6020828403121561004f575f5ffd5b81516001600160a01b0381168114610065575f5ffd5b9392505050565b6080516121316100985f395f818160dd0152818161093801528181610a330152610a5e01526121315ff3fe608060405260043610610033575f3560e01c80630d19e51914610037578063482c6a8514610058578063ae0b91e51461006b575b5f5ffd5b348015610042575f5ffd5b5061005661005136600461193e565b61007e565b005b610056610066366004611bf6565b61028f565b610056610079366004611ca3565b6104bc565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146100c4576100c46106dc565b8573ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1614610149576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8673ffffffffffffffffffffffffffffffffffffffff168686604051610171929190611cef565b5f604051808303815f865af19150503d805f81146101aa576040519150601f19603f3d011682016040523d82523d5f602084013e6101af565b606091505b505080915050806101ec576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff84161561020f5783610211565b335b905061021e85828561077b565b8073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167f9779662e766b5675e69e09303bc2f58ae30397b71b8021ab947defd27747b95f8560405161027d91815260200190565b60405180910390a35050505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161030a576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61031a3447611cfe565b905086806101000151610359576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610397576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886103ba8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103f1576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361042e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361046b576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61047f8a5f01518b60c001518b8b336107b0565b60c08b015261048e8a886108f3565b5047915050818111156104af576104af5f846104aa8585611cfe565b61077b565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610537576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6105473447611cfe565b90508480610100015115610587576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101200151156105c5576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866105e88160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561061f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361065c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610699576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106ab88608001518960c00151610bb4565b6106b588886108f3565b5047915050818111156106d1576106d15f846104aa8585611cfe565b50505f909155505050565b5f80357fffffffff000000000000000000000000000000000000000000000000000000001681527fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e6020818152604080842033855290915290912054600160ff909116151514610778576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b73ffffffffffffffffffffffffffffffffffffffff83166107a5576107a08282610c68565b505050565b6107a0838383610cd5565b5f828082036107eb576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f85856107f9600185611cfe565b81811061080857610808611d36565b905060200281019061081a9190611d63565b61082b906080810190606001611d9f565b90505f61083782610d43565b905073ffffffffffffffffffffffffffffffffffffffff82166108615761085e3482611cfe565b90505b5f61086c8888610d8d565b90506108788888610e97565b6108858a89898985610f03565b5f8261089085610d43565b61089a9190611cfe565b9050898110156108e5576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b608082015173ffffffffffffffffffffffffffffffffffffffff16610a295760c082015160a083015160e084015173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001692633f2e5fc392909182906109736040880160208901611dc1565b6109806020890189611de8565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e089901b16815273ffffffffffffffffffffffffffffffffffffffff9095166004860152602485019390935267ffffffffffffffff918216604485015216606483015263ffffffff16608482015260a4015f604051808303818588803b158015610a0d575f5ffd5b505af1158015610a1f573d5f5f3e3d5ffd5b5050505050610b79565b610a5c82608001517f00000000000000000000000000000000000000000000000000000000000000008460c001516112ae565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a5977fbb8360a0015184608001518560c001518660e00151866020016020810190610abf9190611dc1565b610acc6020890189611de8565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e089901b16815273ffffffffffffffffffffffffffffffffffffffff9687166004820152959094166024860152604485019290925267ffffffffffffffff908116606485015216608483015263ffffffff1660a482015260c4015f604051808303815f87803b158015610b62575f5ffd5b505af1158015610b74573d5f5f3e3d5ffd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f182604051610ba89190611e57565b60405180910390a15050565b805f03610bed576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610c465780341015610c42576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610c4273ffffffffffffffffffffffffffffffffffffffff83163330846112da565b73ffffffffffffffffffffffffffffffffffffffff8216610cb5576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c4273ffffffffffffffffffffffffffffffffffffffff831682611332565b73ffffffffffffffffffffffffffffffffffffffff8216610d22576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107a073ffffffffffffffffffffffffffffffffffffffff8416838361134b565b5f73ffffffffffffffffffffffffffffffffffffffff821615610d8557610d8073ffffffffffffffffffffffffffffffffffffffff831630611394565b610d87565b475b92915050565b6060815f8167ffffffffffffffff811115610daa57610daa6119e9565b604051908082528060200260200182016040528015610dd3578160200160208202803683370190505b5090505f805b83811015610e8c57868682818110610df357610df3611d36565b9050602002810190610e059190611d63565b610e16906080810190606001611d9f565b9150610e2182610d43565b838281518110610e3357610e33611d36565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610e845734838281518110610e6c57610e6c611d36565b60200260200101818151610e809190611cfe565b9052505b600101610dd9565b509095945050505050565b5f5b818110156107a05736838383818110610eb457610eb4611d36565b9050602002810190610ec69190611d63565b9050610ed860e0820160c08301611f6a565b15610efa57610efa610ef06060830160408401611d9f565b8260800135610bb4565b50600101610e99565b8383838382600181146111ca575f8585610f1e600185611cfe565b818110610f2d57610f2d611d36565b9050602002810190610f3f9190611d63565b610f50906080810190606001611d9f565b90505f89815b818110156110f757368d8d83818110610f7157610f71611d36565b9050602002810190610f839190611d63565b9050610fb2610f986060830160408401611d9f565b73ffffffffffffffffffffffffffffffffffffffff161590565b806110145750611014610fcb6040830160208401611d9f565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561102b575061102b610fcb6020830183611d9f565b80156110ae57506110ae61104260a0830183611f83565b611050916004915f91611feb565b61105991612012565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6110e4576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110ee8f826113c7565b50600101610f56565b505f90505b611107600185611cfe565b8110156111c2575f88888381811061112157611121611d36565b90506020028101906111339190611d63565b611144906080810190606001611d9f565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146111b95785828151811061118b5761118b611d36565b602002602001015161119c82610d43565b6111a69190611cfe565b925082156111b9576111b981888561077b565b506001016110fc565b5050506112a2565b875f5b8181101561129f57368b8b838181106111e8576111e8611d36565b90506020028101906111fa9190611d63565b905061120f610f986060830160408401611d9f565b806112285750611228610fcb6040830160208401611d9f565b801561123f575061123f610fcb6020830183611d9f565b8015611256575061125661104260a0830183611f83565b61128c576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6112968d826113c7565b506001016111cd565b50505b50505050505050505050565b6107a08383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611699565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661132557637939f4245f526004601cfd5b5f60605260405250505050565b5f385f3884865af1610c425763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f5114171661138b576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6113dc6113d76020830183611d9f565b6117aa565b611412576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611451576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f611465610f986060850160408601611d9f565b61146f575f611475565b82608001355b90505f61149061148b6060860160408701611d9f565b610d43565b90505f6114a661148b6080870160608801611d9f565b9050825f036114dc576114dc6114c26060870160408801611d9f565b6114d26040880160208901611d9f565b87608001356112ae565b8460800135821015611527576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016108dc565b5f806115366020880188611d9f565b73ffffffffffffffffffffffffffffffffffffffff168561155a60a08a018a611f83565b604051611568929190611cef565b5f6040518083038185875af1925050503d805f81146115a2576040519150601f19603f3d011682016040523d82523d5f602084013e6115a7565b606091505b5091509150816115ba576115ba81611885565b5f6115ce61148b60808a0160608b01611d9f565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896115ff60208b018b611d9f565b61160f60608c0160408d01611d9f565b61161f60808d0160608e01611d9f565b8c60800135898711611631578661163b565b61163b8a88611cfe565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166116e6576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611759573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061177d9190612078565b10156117a4576117a473ffffffffffffffffffffffffffffffffffffffff8516848361188f565b50505050565b6040805160038082528183019092525f91829182917fef0100000000000000000000000000000000000000000000000000000000000091839160208201818036833701905050863b945090507fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47060035f60208401893c863f93505f61182e8361208f565b90507fffffff00000000000000000000000000000000000000000000000000000000008085169082160361186a57506001979650505050505050565b5f861180156118795750818514155b98975050505050505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f5114171661138b575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661138b57633e3f8f735f526004601cfd5b73ffffffffffffffffffffffffffffffffffffffff81168114610778575f5ffd5b80356119398161190d565b919050565b5f5f5f5f5f5f60a08789031215611953575f5ffd5b863561195e8161190d565b9550602087013567ffffffffffffffff811115611979575f5ffd5b8701601f81018913611989575f5ffd5b803567ffffffffffffffff81111561199f575f5ffd5b8960208284010111156119b0575f5ffd5b602091909101955093506119c66040880161192e565b92506119d46060880161192e565b95989497509295919493608090920135925050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611a3a57611a3a6119e9565b60405290565b5f82601f830112611a4f575f5ffd5b813567ffffffffffffffff811115611a6957611a696119e9565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611ab657611ab66119e9565b604052818152838201602001851015611acd575f5ffd5b816020850160208301375f918101602001919091529392505050565b80358015158114611939575f5ffd5b5f6101408284031215611b09575f5ffd5b611b11611a16565b823581529050602082013567ffffffffffffffff811115611b30575f5ffd5b611b3c84828501611a40565b602083015250604082013567ffffffffffffffff811115611b5b575f5ffd5b611b6784828501611a40565b604083015250611b796060830161192e565b6060820152611b8a6080830161192e565b6080820152611b9b60a0830161192e565b60a082015260c0828101359082015260e08083013590820152611bc16101008301611ae9565b610100820152611bd46101208301611ae9565b61012082015292915050565b5f60408284031215611bf0575f5ffd5b50919050565b5f5f5f5f60808587031215611c09575f5ffd5b843567ffffffffffffffff811115611c1f575f5ffd5b611c2b87828801611af8565b945050602085013567ffffffffffffffff811115611c47575f5ffd5b8501601f81018713611c57575f5ffd5b803567ffffffffffffffff811115611c6d575f5ffd5b8760208260051b8401011115611c81575f5ffd5b60209190910193509150611c988660408701611be0565b905092959194509250565b5f5f60608385031215611cb4575f5ffd5b823567ffffffffffffffff811115611cca575f5ffd5b611cd685828601611af8565b925050611ce68460208501611be0565b90509250929050565b818382375f9101908152919050565b81810381811115610d87577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611d95575f5ffd5b9190910192915050565b5f60208284031215611daf575f5ffd5b8135611dba8161190d565b9392505050565b5f60208284031215611dd1575f5ffd5b813567ffffffffffffffff81168114611dba575f5ffd5b5f60208284031215611df8575f5ffd5b813563ffffffff81168114611dba575f5ffd5b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f60208301516101406040840152611e7e610160840182611e0b565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611eb98282611e0b565b9150506060840151611ee3608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611f5261012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215611f7a575f5ffd5b611dba82611ae9565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611fb6575f5ffd5b83018035915067ffffffffffffffff821115611fd0575f5ffd5b602001915036819003821315611fe4575f5ffd5b9250929050565b5f5f85851115611ff9575f5ffd5b83861115612005575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015612071577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f60208284031215612088575f5ffd5b5051919050565b805160208201517fffffff00000000000000000000000000000000000000000000000000000000008116919060038210156120f4577fffffff0000000000000000000000000000000000000000000000000000000000808360030360031b1b82161692505b505091905056fea2646970667358221220f880070befd15adcbf8be2e8cc2e13436948ddc04b1e4cb214000d18cebcc2d864736f6c634300081d0033";
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
    }, {
        readonly type: "error";
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }];
    static createInterface(): CBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CBridgeFacet;
}
export {};
