import { Signer, ContractFactory, BytesLike, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AcrossFacetPackedV4, AcrossFacetPackedV4Interface } from "../AcrossFacetPackedV4";
type AcrossFacetPackedV4ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AcrossFacetPackedV4__factory extends ContractFactory {
    constructor(...args: AcrossFacetPackedV4ConstructorParams);
    deploy(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<BytesLike>, _owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AcrossFacetPackedV4>;
    getDeployTransaction(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<BytesLike>, _owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AcrossFacetPackedV4;
    connect(signer: Signer): AcrossFacetPackedV4__factory;
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b5060405161290b38038061290b83398101604081905261002e916100b7565b5f80546001600160a01b0319166001600160a01b038381169190911790915583161580610059575081155b8061006b57506001600160a01b038116155b15610089576040516306b7c75960e31b815260040160405180910390fd5b506001600160a01b0390911660805260a0526100f7565b6001600160a01b03811681146100b4575f5ffd5b50565b5f5f5f606084860312156100c9575f5ffd5b83516100d4816100a0565b6020850151604086015191945092506100ec816100a0565b809150509250925092565b60805160a0516127c26101495f395f81816102c40152818161114a01526116ff01525f8181610350015281816108d501528181610b3401528181610c920152818161111801526116a901526127c25ff3fe608060405260043610610109575f3560e01c80637f81cef3116100a1578063c5d60e9711610071578063e30c397811610057578063e30c3978146102f4578063f2fde38b14610320578063f65039921461033f575f5ffd5b8063c5d60e97146102ab578063d999984d146102b3575f5ffd5b80637f81cef3146101fd57806380afb110146102105780638da5cb5b1461023c578063b7bb34fa1461028c575f5ffd5b80634c478642116100dc5780634c4786421461018c5780637200b829146101ab578063750c7192146101bf57806379b80512146101de575f5ffd5b8063012f27e71461010d5780631458d7ad1461014357806323452b9c1461016457806336b9240414610178575b5f5ffd5b348015610118575f5ffd5b5061012c610127366004611e4a565b610372565b60405161013a929190611fa1565b60405180910390f35b34801561014e575f5ffd5b5061016261015d3660046120ef565b61067f565b005b34801561016f575f5ffd5b506101626107b2565b348015610183575f5ffd5b5061016261087b565b348015610197575f5ffd5b506101626101a636600461216a565b610aae565b3480156101b6575f5ffd5b50610162610b86565b3480156101ca575f5ffd5b506101626101d93660046121f2565b610c6a565b3480156101e9575f5ffd5b5061012c6101f8366004611e4a565b610de3565b61016261020b366004612234565b611101565b34801561021b575f5ffd5b5061022f61022a366004612234565b611289565b60405161013a9190612266565b348015610247575f5ffd5b505f546102679073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161013a565b348015610297575f5ffd5b5061022f6102a63660046121f2565b6113b7565b610162611692565b3480156102be575f5ffd5b506102e67f000000000000000000000000000000000000000000000000000000000000000081565b60405190815260200161013a565b3480156102ff575f5ffd5b506001546102679073ffffffffffffffffffffffffffffffffffffffff1681565b34801561032b575f5ffd5b5061016261033a36600461227f565b6118a1565b34801561034a575f5ffd5b506102677f000000000000000000000000000000000000000000000000000000000000000081565b6104066040518061014001604052805f815260200160608152602001606081526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f81526020015f81526020015f151581526020015f151581525090565b61047d6040518061016001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f6fffffffffffffffffffffffffffffffff1681526020015f81526020015f63ffffffff1681526020015f63ffffffff1681526020015f63ffffffff168152602001606081525090565b60bc8310156104b8576040517fca0ad26000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104c6600c60048587612298565b6104cf916122bf565b7fffffffffffffffff000000000000000000000000000000000000000000000000168252610501602c600c8587612298565b61050a91612325565b73ffffffffffffffffffffffffffffffffffffffff1660a083015261053360b060ac8587612298565b61053c91612361565b60e090811c90830152610553604c602c8587612298565b61055c91612325565b602082015261056f606c604c8587612298565b61057891612325565b604082015261058b608c606c8587612298565b61059491612325565b60608201526105a760ac608c8587612298565b6105b091612325565b60808201526105c360d060b08587612298565b6105cc91612325565b60c08201526105df60d460d08587612298565b6105e891612361565b60e090811c908201526105ff60d860d48587612298565b61060891612361565b60e01c61010082015261061f60dc60d88587612298565b61062891612361565b60e01c61012082015261063e8360dc8187612298565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152505050506101408201525b9250929050565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146106cf576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8673ffffffffffffffffffffffffffffffffffffffff1686866040516106f79291906123d4565b5f604051808303815f865af19150503d805f8114610730576040519150601f19603f3d011682016040523d82523d5f602084013e610735565b606091505b5050905080156107775761074a8484846119fd565b6040517fdfbe65d77c5440a078a2a1d95803d06b4a5f85b26ba3ec87bc9b421781e8dec1905f90a16107a9565b6040517f750b219c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050505050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610802576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610851576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b5f61088a606c604c3684612298565b61089391612325565b90505f6108a4607c606c3684612298565b6108ad916123e3565b60801c90506108be82333084611a2d565b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663ad5425c6610908604c602c365f612298565b61091191612325565b61091f602c600c365f612298565b61092891612325565b8561093760a06080365f612298565b61094091612325565b8661094f60c060a0365f612298565b61095891612325565b6109666080607c365f612298565b61096f91612361565b60e090811c906109829060c0365f612298565b61098b91612325565b61099960e460e0365f612298565b6109a291612361565b60e01c6109b360e860e4365f612298565b6109bc91612361565b60e01c6109cd60ec60e8365f612298565b6109d691612361565b60e01c6109e63660ec815f612298565b6040518e63ffffffff1660e01b8152600401610a0e9d9c9b9a9998979695949392919061248f565b5f604051808303815f87803b158015610a25575f5ffd5b505af1158015610a37573d5f5f3e3d5ffd5b507fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c1339250610a6d9150600c90506004365f612298565b610a76916122bf565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a15050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610afe576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f5b81811015610b8157610b79838383818110610b1d57610b1d612519565b9050602002016020810190610b32919061227f565b7f00000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611aa2565b600101610b00565b505050565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610bd8576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b6060820135610c7b81333085611a2d565b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663ad5425c660408501356020860135606087013560a08801803590889060c08b013590610ce29060808d01612546565b60e08c0135610cf96101208e016101008f0161256d565b8d610120016020810190610d0d919061256d565b8e610140016020810190610d21919061256d565b8f806101600190610d329190612590565b6040518e63ffffffff1660e01b8152600401610d5a9d9c9b9a9998979695949392919061248f565b5f604051808303815f87803b158015610d71575f5ffd5b505af1158015610d83573d5f5f3e3d5ffd5b50506040517fffffffffffffffff00000000000000000000000000000000000000000000000086351681527fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c1339250602001905060405180910390a1505050565b610e776040518061014001604052805f815260200160608152602001606081526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f81526020015f81526020015f151581526020015f151581525090565b610eee6040518061016001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f6fffffffffffffffffffffffffffffffff1681526020015f81526020015f63ffffffff1681526020015f63ffffffff1681526020015f63ffffffff168152602001606081525090565b60ec831015610f29576040517fca0ad26000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f37600c60048587612298565b610f40916122bf565b7fffffffffffffffff000000000000000000000000000000000000000000000000168252610f72602c600c8587612298565b610f7b91612325565b73ffffffffffffffffffffffffffffffffffffffff1660a0830152610fa4604c602c8587612298565b610fad91612325565b6020820152610fc0606c604c8587612298565b610fc991612325565b6040820152610fdc606c604c8587612298565b610fe591612325565b73ffffffffffffffffffffffffffffffffffffffff16608083015261100e607c606c8587612298565b611017916123e3565b608090811c60c084015261102e90607c8587612298565b61103791612361565b60e090811c9083015261104e60a060808587612298565b61105791612325565b606082015261106a60c060a08587612298565b61107391612325565b608082015261108660e060c08587612298565b61108f91612325565b60c08201526110a260e460e08587612298565b6110ab91612361565b60e090811c908201526110c260e860e48587612298565b6110cb91612361565b60e01c6101008201526110e260ec60e88587612298565b6110eb91612361565b60e01c61012082015261063e8360ec8187612298565b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663ad5425c634604084013560208501357f000000000000000000000000000000000000000000000000000000000000000060a08701803590859060c08a0135906111859060808c01612546565b60e08b013561119c6101208d016101008e0161256d565b6111ae6101408e016101208f0161256d565b8d6101400160208101906111c2919061256d565b8e8061016001906111d39190612590565b6040518f63ffffffff1660e01b81526004016111fb9d9c9b9a9998979695949392919061248f565b5f604051808303818588803b158015611212575f5ffd5b505af1158015611224573d5f5f3e3d5ffd5b50506040517fffffffffffffffff00000000000000000000000000000000000000000000000085351681527fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c1339350602001915061127e9050565b60405180910390a150565b606063ffffffff6112a060a0840160808501612546565b67ffffffffffffffff1611156112e2576040517f90eaaa7000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fc5d60e9700000000000000000000000000000000000000000000000000000000823560208401356040850135606086013560a0870180359060c08901359061132e9060808b01612546565b60e090811b908a01356113496101208c016101008d0161256d565b60e01b61135e6101408d016101208e0161256d565b60e01b6113736101608e016101408f0161256d565b60e01b6113846101608f018f612590565b6040516020016113a19e9d9c9b9a999897969594939291906125f1565b6040516020818303038152906040529050919050565b606063ffffffff6113ce60a0850160808601612546565b67ffffffffffffffff161115611410576040517f90eaaa7000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6fffffffffffffffffffffffffffffffff82111561145a576040517f340dabef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b604080517f36b92404000000000000000000000000000000000000000000000000000000006020808301919091527fffffffffffffffff0000000000000000000000000000000000000000000000008635166024830152850135602c82015290840135604c8201526060840135606c8201525f90608c0160405160208183030381529060405290505f8360801b8560800160208101906114fa9190612546565b6040517fffffffffffffffffffffffffffffffff0000000000000000000000000000000092909216602083015260e01b7fffffffff0000000000000000000000000000000000000000000000000000000016603082015260a0860135603482015260c08601356054820152607401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291905290505f60e08601356115b06101208801610100890161256d565b60e01b6115c561014089016101208a0161256d565b60e01b6115da6101608a016101408b0161256d565b6040805160208101959095527fffffffff0000000000000000000000000000000000000000000000000000000093841690850152908216604484015260e01b166048820152604c01604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291905290508282826116636101608a018a612590565b604051602001611677959493929190612743565b60405160208183030381529060405293505050505b92915050565b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663ad5425c6346116dd604c602c365f612298565b6116e691612325565b6116f4602c600c365f612298565b6116fd91612325565b7f000000000000000000000000000000000000000000000000000000000000000061172c608c606c365f612298565b61173591612325565b3461174460ac608c365f612298565b61174d91612325565b61175b60b060ac365f612298565b61176491612361565b60e01c61177560d060b0365f612298565b61177e91612325565b61178c60d460d0365f612298565b61179591612361565b60e01c6117a660d860d4365f612298565b6117af91612361565b60e01c6117c060dc60d8365f612298565b6117c991612361565b60e01c6117d93660dc815f612298565b6040518f63ffffffff1660e01b81526004016118019d9c9b9a9998979695949392919061248f565b5f604051808303818588803b158015611818575f5ffd5b505af115801561182a573d5f5f3e3d5ffd5b507fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c13393506118629250600c915060049050365f612298565b61186b916122bf565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a1565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146118f1576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811661193e576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff82160361198d576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b73ffffffffffffffffffffffffffffffffffffffff8316611a2257610b818282611ace565b610b81838383611b3f565b73ffffffffffffffffffffffffffffffffffffffff8216611a7a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611a9c73ffffffffffffffffffffffffffffffffffffffff8516848484611bad565b50505050565b610b818383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611c05565b73ffffffffffffffffffffffffffffffffffffffff8216611b1b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611b3b73ffffffffffffffffffffffffffffffffffffffff831682611d2c565b5050565b73ffffffffffffffffffffffffffffffffffffffff8216611b8c576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b8173ffffffffffffffffffffffffffffffffffffffff84168383611d45565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716611bf857637939f4245f526004601cfd5b5f60605260405250505050565b73ffffffffffffffffffffffffffffffffffffffff841615611a9c5773ffffffffffffffffffffffffffffffffffffffff8316611c6e576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611ce1573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611d059190612775565b1015611a9c57611a9c73ffffffffffffffffffffffffffffffffffffffff85168483611d8e565b5f385f3884865af1611b3b5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611d85576390b8ec185f526004601cfd5b5f603452505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611d85575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611d8557633e3f8f735f526004601cfd5b5f5f83601f840112611e1c575f5ffd5b50813567ffffffffffffffff811115611e33575f5ffd5b602083019150836020828501011115610678575f5ffd5b5f5f60208385031215611e5b575f5ffd5b823567ffffffffffffffff811115611e71575f5ffd5b611e7d85828601611e0c565b90969095509350505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b80518252602081015160208301526040810151604083015260608101516060830152608081015160808301525f60a0820151611f2560a08501826fffffffffffffffffffffffffffffffff169052565b5060c082015160c084015260e0820151611f4760e085018263ffffffff169052565b50610100820151611f6161010085018263ffffffff169052565b50610120820151611f7b61012085018263ffffffff169052565b50610140820151610160610140850152611f99610160850182611e89565b949350505050565b60408152825160408201525f60208401516101406060840152611fc8610180840182611e89565b905060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc08483030160808501526120038282611e89565b915050606085015161202d60a085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060a085015173ffffffffffffffffffffffffffffffffffffffff811660e08501525060c085015161010084015260e085015161012084015261010085015161209d61014085018215159052565b50610120850151151561016084015282810360208401526120be8185611ed5565b95945050505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146120ea575f5ffd5b919050565b5f5f5f5f5f5f60a08789031215612104575f5ffd5b61210d876120c7565b9550602087013567ffffffffffffffff811115612128575f5ffd5b61213489828a01611e0c565b90965094506121479050604088016120c7565b9250612155606088016120c7565b95989497509295919493608090920135925050565b5f5f6020838503121561217b575f5ffd5b823567ffffffffffffffff811115612191575f5ffd5b8301601f810185136121a1575f5ffd5b803567ffffffffffffffff8111156121b7575f5ffd5b8560208260051b84010111156121cb575f5ffd5b6020919091019590945092505050565b5f61018082840312156121ec575f5ffd5b50919050565b5f5f60408385031215612203575f5ffd5b823567ffffffffffffffff811115612219575f5ffd5b612225858286016121db565b95602094909401359450505050565b5f60208284031215612244575f5ffd5b813567ffffffffffffffff81111561225a575f5ffd5b611f99848285016121db565b602081525f6122786020830184611e89565b9392505050565b5f6020828403121561228f575f5ffd5b612278826120c7565b5f5f858511156122a6575f5ffd5b838611156122b2575f5ffd5b5050820193919092039150565b80357fffffffffffffffff000000000000000000000000000000000000000000000000811690600884101561231e577fffffffffffffffff000000000000000000000000000000000000000000000000808560080360031b1b82161691505b5092915050565b8035602083101561168c577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff602084900360031b1b1692915050565b80357fffffffff00000000000000000000000000000000000000000000000000000000811690600484101561231e577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505092915050565b81818437505f910190815290565b818382375f9101908152919050565b80357fffffffffffffffffffffffffffffffff00000000000000000000000000000000811690601084101561231e577fffffffffffffffffffffffffffffffff00000000000000000000000000000000808560100360031b1b82161691505092915050565b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b8d81528c60208201528b60408201528a60608201528960808201528860a082015267ffffffffffffffff881660c08201528660e082015263ffffffff861661010082015263ffffffff851661012082015263ffffffff84166101408201526101806101608201525f61250661018083018486612448565b9f9e505050505050505050505050505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f60208284031215612556575f5ffd5b813567ffffffffffffffff81168114612278575f5ffd5b5f6020828403121561257d575f5ffd5b813563ffffffff81168114612278575f5ffd5b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126125c3575f5ffd5b83018035915067ffffffffffffffff8211156125dd575f5ffd5b602001915036819003821315610678575f5ffd5b7fffffffff000000000000000000000000000000000000000000000000000000008f1681527fffffffffffffffff0000000000000000000000000000000000000000000000008e1660048201528c600c8201528b602c8201528a604c82015289606c82015288608c8201527fffffffff00000000000000000000000000000000000000000000000000000000881660ac8201528660b08201527fffffffff00000000000000000000000000000000000000000000000000000000861660d08201526126e060d48201867fffffffff00000000000000000000000000000000000000000000000000000000169052565b7fffffffff00000000000000000000000000000000000000000000000000000000841660d88201525f61271760dc830184866123c6565b90509f9e505050505050505050505050505050565b5f81518060208401855e5f93019283525090919050565b5f61276061275a612754848a61272c565b8861272c565b8661272c565b838582375f9301928352509095945050505050565b5f60208284031215612785575f5ffd5b505191905056fea26469706673582212202fd595325736ce5778cff769862d4ff31f09c3c9ebf5a4e404fcdc660df8f28264736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_spokePool";
            readonly type: "address";
            readonly internalType: "contract IAcrossSpokePoolV4";
        }, {
            readonly name: "_wrappedNative";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "SPOKEPOOL";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IAcrossSpokePoolV4";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "WRAPPED_NATIVE";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "cancelOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "confirmOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "decode_startBridgeTokensViaAcrossV4ERC20Packed";
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
            readonly name: "acrossData";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacetV4.AcrossV4Data";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "refundAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputAmountMultiplier";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "exclusiveRelayer";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "exclusivityDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "decode_startBridgeTokensViaAcrossV4NativePacked";
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
            readonly name: "acrossData";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacetV4.AcrossV4Data";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "refundAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputAmountMultiplier";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "exclusiveRelayer";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "exclusivityDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "encode_startBridgeTokensViaAcrossV4ERC20Packed";
        readonly inputs: readonly [{
            readonly name: "_parameters";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacetPackedV4.PackedParameters";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "receiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "depositor";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "exclusiveRelayer";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "exclusivityDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }, {
            readonly name: "inputAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "encode_startBridgeTokensViaAcrossV4NativePacked";
        readonly inputs: readonly [{
            readonly name: "_parameters";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacetPackedV4.PackedParameters";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "receiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "depositor";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "exclusiveRelayer";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "exclusivityDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "executeCallAndWithdraw";
        readonly inputs: readonly [{
            readonly name: "_callTo";
            readonly type: "address";
            readonly internalType: "address";
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
        readonly type: "function";
        readonly name: "owner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "pendingOwner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "setApprovalForBridge";
        readonly inputs: readonly [{
            readonly name: "tokensToApprove";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcrossV4ERC20Min";
        readonly inputs: readonly [{
            readonly name: "_parameters";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacetPackedV4.PackedParameters";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "receiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "depositor";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "exclusiveRelayer";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "exclusivityDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }, {
            readonly name: "inputAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcrossV4ERC20Packed";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcrossV4NativeMin";
        readonly inputs: readonly [{
            readonly name: "_parameters";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacetPackedV4.PackedParameters";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "receiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "depositor";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "exclusiveRelayer";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "exclusivityDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcrossV4NativePacked";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "transferOwnership";
        readonly inputs: readonly [{
            readonly name: "_newOwner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly name: "CallExecutedAndFundsWithdrawn";
        readonly inputs: readonly [];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiAcrossTransfer";
        readonly inputs: readonly [{
            readonly name: "_transactionId";
            readonly type: "bytes8";
            readonly indexed: false;
            readonly internalType: "bytes8";
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
        readonly type: "event";
        readonly name: "OwnershipTransferRequested";
        readonly inputs: readonly [{
            readonly name: "_from";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "OwnershipTransferred";
        readonly inputs: readonly [{
            readonly name: "previousOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "newOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "InvalidCalldataLength";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidConfig";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidDestinationChainId";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidInputAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NewOwnerMustNotBeSelf";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoNullOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoPendingOwnershipTransfer";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotPendingOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "WithdrawFailed";
        readonly inputs: readonly [];
    }];
    static createInterface(): AcrossFacetPackedV4Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): AcrossFacetPackedV4;
}
export {};
