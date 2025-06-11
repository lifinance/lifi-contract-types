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
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b5060405161205c38038061205c83398101604081905261002e9161003f565b6001600160a01b031660805261006c565b5f6020828403121561004f575f5ffd5b81516001600160a01b0381168114610065575f5ffd5b9392505050565b608051611fc46100985f395f818160dd0152818161093701528181610a320152610a5d0152611fc45ff3fe608060405260043610610033575f3560e01c80630d19e51914610037578063482c6a8514610058578063ae0b91e51461006b575b5f5ffd5b348015610042575f5ffd5b5061005661005136600461183d565b61007e565b005b610056610066366004611af5565b61028f565b610056610079366004611ba2565b6104bc565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146100c4576100c46106dc565b8573ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1614610149576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8673ffffffffffffffffffffffffffffffffffffffff168686604051610171929190611bee565b5f604051808303815f865af19150503d805f81146101aa576040519150601f19603f3d011682016040523d82523d5f602084013e6101af565b606091505b505080915050806101ec576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff84161561020f5783610211565b335b905061021e85828561077b565b8073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167f9779662e766b5675e69e09303bc2f58ae30397b71b8021ab947defd27747b95f8560405161027d91815260200190565b60405180910390a35050505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161030a576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61031a3447611bfd565b905086806101000151610359576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610397576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886103ba8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103f1576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361042e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361046b576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61047f8a5f01518b60c001518b8b336107b0565b60c08b015261048e8a886108f2565b5047915050818111156104af576104af5f846104aa8585611bfd565b61077b565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610537576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6105473447611bfd565b90508480610100015115610587576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101200151156105c5576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866105e88160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561061f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361065c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610699576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106ab88608001518960c00151610bb3565b6106b588886108f2565b5047915050818111156106d1576106d15f846104aa8585611bfd565b50505f909155505050565b5f80357fffffffff000000000000000000000000000000000000000000000000000000001681527fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e6020818152604080842033855290915290912054600160ff909116151514610778576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b73ffffffffffffffffffffffffffffffffffffffff83166107a5576107a08282610c67565b505050565b6107a0838383610cd4565b5f828082036107eb576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f85856107f9600185611bfd565b81811061080857610808611c35565b905060200281019061081a9190611c62565b61082b906080810190606001611c9e565b90505f61083782610d42565b905073ffffffffffffffffffffffffffffffffffffffff82166108615761085e3482611bfd565b90505b5f61086c8888610d8c565b90506108788888610e96565b6108858a89898985610f02565b5f8261089085610d42565b61089a9190611bfd565b9050898110156108e4576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b608082015173ffffffffffffffffffffffffffffffffffffffff16610a285760c082015160a083015160e084015173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001692633f2e5fc392909182906109726040880160208901611cc0565b61097f6020890189611ce7565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e089901b16815273ffffffffffffffffffffffffffffffffffffffff9095166004860152602485019390935267ffffffffffffffff918216604485015216606483015263ffffffff16608482015260a4015f604051808303818588803b158015610a0c575f5ffd5b505af1158015610a1e573d5f5f3e3d5ffd5b5050505050610b78565b610a5b82608001517f00000000000000000000000000000000000000000000000000000000000000008460c0015161123a565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a5977fbb8360a0015184608001518560c001518660e00151866020016020810190610abe9190611cc0565b610acb6020890189611ce7565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e089901b16815273ffffffffffffffffffffffffffffffffffffffff9687166004820152959094166024860152604485019290925267ffffffffffffffff908116606485015216608483015263ffffffff1660a482015260c4015f604051808303815f87803b158015610b61575f5ffd5b505af1158015610b73573d5f5f3e3d5ffd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f182604051610ba79190611d56565b60405180910390a15050565b805f03610bec576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610c455780341015610c41576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610c4173ffffffffffffffffffffffffffffffffffffffff8316333084611266565b73ffffffffffffffffffffffffffffffffffffffff8216610cb4576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c4173ffffffffffffffffffffffffffffffffffffffff8316826112be565b73ffffffffffffffffffffffffffffffffffffffff8216610d21576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107a073ffffffffffffffffffffffffffffffffffffffff841683836112d7565b5f73ffffffffffffffffffffffffffffffffffffffff821615610d8457610d7f73ffffffffffffffffffffffffffffffffffffffff831630611320565b610d86565b475b92915050565b6060815f8167ffffffffffffffff811115610da957610da96118e8565b604051908082528060200260200182016040528015610dd2578160200160208202803683370190505b5090505f805b83811015610e8b57868682818110610df257610df2611c35565b9050602002810190610e049190611c62565b610e15906080810190606001611c9e565b9150610e2082610d42565b838281518110610e3257610e32611c35565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610e835734838281518110610e6b57610e6b611c35565b60200260200101818151610e7f9190611bfd565b9052505b600101610dd8565b509095945050505050565b5f5b818110156107a05736838383818110610eb357610eb3611c35565b9050602002810190610ec59190611c62565b9050610ed760e0820160c08301611e69565b15610ef957610ef9610eef6060830160408401611c9e565b8260800135610bb3565b50600101610e98565b8383838382805f5b818110156110ab57368b8b83818110610f2557610f25611c35565b9050602002810190610f379190611c62565b9050610f66610f4c6060830160408401611c9e565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610fc85750610fc8610f7f6040830160208401611c9e565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610fdf5750610fdf610f7f6020830183611c9e565b80156110625750611062610ff660a0830183611e82565b611004916004915f91611eea565b61100d91611f11565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611098576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110a28d82611353565b50600101610f0a565b5050806001146111c4575f85856110c3600185611bfd565b8181106110d2576110d2611c35565b90506020028101906110e49190611c62565b6110f5906080810190606001611c9e565b90505f805b611105600185611bfd565b8110156111c0575f88888381811061111f5761111f611c35565b90506020028101906111319190611c62565b611142906080810190606001611c9e565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146111b75785828151811061118957611189611c35565b602002602001015161119a82610d42565b6111a49190611bfd565b925082156111b7576111b781888561077b565b506001016110fa565b5050505b5f5b8181101561122d575f8686838181106111e1576111e1611c35565b90506020028101906111f39190611c62565b611204906060810190604001611c9e565b90505f61121082610d42565b905080156112235761122382878361077b565b50506001016111c6565b5050505050505050505050565b6107a08383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6115c3565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f511417166112b157637939f4245f526004601cfd5b5f60605260405250505050565b5f385f3884865af1610c415763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611317576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6113686113636020830183611c9e565b6116f0565b61139e576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036113dd576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6113f1610f4c6060850160408601611c9e565b6113fb575f611401565b82608001355b90505f61141c6114176080860160608701611c9e565b610d42565b9050815f03611452576114526114386060860160408701611c9e565b6114486040870160208801611c9e565b866080013561123a565b5f806114616020870187611c9e565b73ffffffffffffffffffffffffffffffffffffffff168461148560a0890189611e82565b604051611493929190611bee565b5f6040518083038185875af1925050503d805f81146114cd576040519150601f19603f3d011682016040523d82523d5f602084013e6114d2565b606091505b5091509150816114e5576114e581611784565b5f6114f96114176080890160608a01611c9e565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861152a60208a018a611c9e565b61153a60608b0160408c01611c9e565b61154a60808c0160608d01611c9e565b8b6080013589871161155c5786611566565b6115668a88611bfd565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156116ea5773ffffffffffffffffffffffffffffffffffffffff831661162c576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa15801561169f573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906116c39190611f77565b10156116ea576116ea73ffffffffffffffffffffffffffffffffffffffff8516848361178e565b50505050565b6040805160178082528183019092525f9182919060208201818036833701905050905060175f60208301853c60208101517f10ff0000000000000000000000000000000000000000000000000000000000007fffffff000000000000000000000000000000000000000000000000000000000082160161177b57506023015160601c3b151592915050565b5050503b151590565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611317575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661131757633e3f8f735f526004601cfd5b73ffffffffffffffffffffffffffffffffffffffff81168114610778575f5ffd5b80356118388161180c565b919050565b5f5f5f5f5f5f60a08789031215611852575f5ffd5b863561185d8161180c565b9550602087013567ffffffffffffffff811115611878575f5ffd5b8701601f81018913611888575f5ffd5b803567ffffffffffffffff81111561189e575f5ffd5b8960208284010111156118af575f5ffd5b602091909101955093506118c56040880161182d565b92506118d36060880161182d565b95989497509295919493608090920135925050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611939576119396118e8565b60405290565b5f82601f83011261194e575f5ffd5b813567ffffffffffffffff811115611968576119686118e8565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff811182821017156119b5576119b56118e8565b6040528181528382016020018510156119cc575f5ffd5b816020850160208301375f918101602001919091529392505050565b80358015158114611838575f5ffd5b5f6101408284031215611a08575f5ffd5b611a10611915565b823581529050602082013567ffffffffffffffff811115611a2f575f5ffd5b611a3b8482850161193f565b602083015250604082013567ffffffffffffffff811115611a5a575f5ffd5b611a668482850161193f565b604083015250611a786060830161182d565b6060820152611a896080830161182d565b6080820152611a9a60a0830161182d565b60a082015260c0828101359082015260e08083013590820152611ac061010083016119e8565b610100820152611ad361012083016119e8565b61012082015292915050565b5f60408284031215611aef575f5ffd5b50919050565b5f5f5f5f60808587031215611b08575f5ffd5b843567ffffffffffffffff811115611b1e575f5ffd5b611b2a878288016119f7565b945050602085013567ffffffffffffffff811115611b46575f5ffd5b8501601f81018713611b56575f5ffd5b803567ffffffffffffffff811115611b6c575f5ffd5b8760208260051b8401011115611b80575f5ffd5b60209190910193509150611b978660408701611adf565b905092959194509250565b5f5f60608385031215611bb3575f5ffd5b823567ffffffffffffffff811115611bc9575f5ffd5b611bd5858286016119f7565b925050611be58460208501611adf565b90509250929050565b818382375f9101908152919050565b81810381811115610d86577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611c94575f5ffd5b9190910192915050565b5f60208284031215611cae575f5ffd5b8135611cb98161180c565b9392505050565b5f60208284031215611cd0575f5ffd5b813567ffffffffffffffff81168114611cb9575f5ffd5b5f60208284031215611cf7575f5ffd5b813563ffffffff81168114611cb9575f5ffd5b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f60208301516101406040840152611d7d610160840182611d0a565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611db88282611d0a565b9150506060840151611de2608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611e5161012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215611e79575f5ffd5b611cb9826119e8565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611eb5575f5ffd5b83018035915067ffffffffffffffff821115611ecf575f5ffd5b602001915036819003821315611ee3575f5ffd5b9250929050565b5f5f85851115611ef8575f5ffd5b83861115611f04575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611f70577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f60208284031215611f87575f5ffd5b505191905056fea26469706673582212200c9f6fac825e1a709d599167a218d4f8c591787fcf7d8f9a19965c008a9eac8364736f6c634300081d0033";
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
